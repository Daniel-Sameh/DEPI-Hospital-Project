const {Doctors, handleDoctorValidation} = require("../models/doctors");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require('bcrypt');
const upload = require("../routes/image-uploader");
const auth = require("../middleware/auth");
const { Departments } = require("../models/departments");
const {Blogs} = require("../models/blogs");
const Joi = require("joi");

require('dotenv').config();
const debug = require("debug")("app:development");
debug.enabled=true;

////////////////////////////////////////////////////////////////////////
//GET all doctors:
router.get("/", async(req,res)=>{
  try{
    const doctors= await Doctors.find({}, { password: 0 });
    res.status(200).send(doctors);
  }catch(err){
    res.status(500),json({ error: 'Failed to fetch doctors' });
  }
});
////////////////////////////////////////////////////////////////////////
//GET a doctor by id:
router.get("/:id", async (req,res)=>{
  debug("req.params.id= ",req.params.id);
  const doctor= await Doctors.findById(req.params.id, { password: 0 });
  if(!doctor){
    return res.status(404).send("No doctor with the given id!");
  }
  res.send(doctor);
});
////////////////////////////////////////////////////////////////////////
//POST(register/signUp) a doctor: 
router.post("/", upload.single('profileImage'),async(req,res)=>{
  const {error} = handleDoctorValidation(req.body);
  if(error){
    const errorMsg = error.details.map((err) => err.message);
    return res.status(400).send(errorMsg);
  }
  //Check for email uniqueness
  let doctor = await Doctors.findOne({email: req.body.email});
  if(doctor) return res.status(400).send("There is already an account for the given email");
  
  //Check if the department exist or not
  let department= await Departments.findById(req.body.departmentId);
  if(!department) return res.status(404).send("There is no department with the given id");

  //Checking for the profile image in request
  debug("The image file: ",req.file);
  if(!req.file){
    return res.status(400).send("Doctor profile picture is required");
  }

  //Encrypting the password and saving the new doctor information
  const salt = await bcrypt.genSalt(10);
  doctor = new Doctors(_.pick(req.body, ['name', 'phone', 'email', 'password','schedule','image','departmentId'])); 
  doctor.image = req.file.path;
  doctor.password = await bcrypt.hash(doctor.password, salt);
  //console.log(doctor.password);

  try{
    //Save the doctor in the database
    await doctor.save();
    const token = doctor.generateAuthToken();
    res.status(201).header('x-auth-token', token).send(_.pick(doctor, ['id','name','phone','email','schedule','image','departmentId'])); 
  }catch(err){
    return res.status(500).send(err);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Update (PUT) a doctor by Id: 
router.put("/:id", auth, upload.single('image'), async (req,res)=>{
  // if(req.role!='doctor'){
  //   return res.status(403).send({message: "Forbidden"});
  // }
  debug("I am in PUT in doctor.js!!!");
  if(req.body.departmentId){
    const department = await Departments.findById(req.body.departmentId);
    if (!department) return res.status(400).send('Invalid department');
  }
  
  //Finding the doctor with id:
  let doctor = await Doctors.findById(req.params.id);
  if (!doctor) return res.status(404).send('The doctor with the given ID was not found');

  //If there is new schedule make it an array:
  // if(req.body.schedule){
  //   req.body.schedule = req.body.schedule.split(',').map(sch => sch.trim());
  // }
  debug("body schedule: ",req.body.schedule);

  //Make the updated doctor
  let updatedDoctor = _.pick(doctor, ['name', 'phone', 'email', 'password','schedule','image','departmentId']);
  _.assign(updatedDoctor, _.pick(req.body, ['name', 'phone', 'email', 'password', 'schedule', 'image', 'departmentId']));
  debug("the updated doctor: ",updatedDoctor);
  debug("THE DEPARTMENT: ",updatedDoctor.departmentId);
  if(req.body.password){
    const salt = await bcrypt.genSalt(10);
    updatedDoctor.password = await bcrypt.hash(req.body.password, salt);
  }
  const { error } = handleDoctorValidation(updatedDoctor);
  if (error) {
    // console.log(error);
    const errorMessages = error.details.map((err) => err.message);
    // console.log(errorMessages);
    return res.status(400).send(errorMessages);
    // return res.status(400).render('edit_course', { errors: errorMessages, course: req.body, authors: authors });
  }
  try{
    doctor = await Doctors.findByIdAndUpdate(req.params.id, updatedDoctor, {new:true});
    res.status(200).send(doctor);
  }catch(err){
    res.status(500).send("Couldn't update the given doctor");
  } 

});
///////////////////////////////////////////////////////////////////////////////
//DELETE a doctor:
router.delete("/:id", auth, async(req,res)=>{
  // debug(req.user);
  if(req.user._id != req.params.id){
    return res.status(403).send({message:"Forbidden"});
  }
  try {
    let doctor = await Doctors.findByIdAndDelete(req.params.id);
    if (!doctor) {
      return res.status(404).send("No doctor with the given id was found");
    }
    doctor = await Doctors.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during a doctor deletion");
  }
});
////////////////////////////////////////////////////////////////////////////
//Doctor LOGIN: 
router.post("/login", async(req,res)=>{
  const {error} = handleLoginValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }

  let doctor = await Doctors.findOne({ email: req.body.email });
  if(!doctor) return res.status(400).send({message:"Invalid Credentials"});

  let validPassword = await bcrypt.compare(req.body.password, doctor.password);
  if (!validPassword) return res.status(400).send("Invalid Credentials");
  const token = doctor.generateAuthToken();
  if (!token) { // Handle potential token generation error
    return res.status(500).send("Internal Server Error");
  }
  doctor =_.pick(doctor,['_id', 'name','email','phone','schedule','departmentId','image']);
  let department = await Departments.findById(doctor.departmentId);
  if(!department) return res.status(404).send("Couldn't find department");
  doctor.department = department.name;

  let blogs= await Blogs.find({author: doctor._id});
  debug("Blogs from login: ",blogs);
  if(blogs){
    doctor.blogs= blogs;
  }
  res.header("x-auth-token", token).render("view_doctor",{doctor:doctor,token:token});

});

const handleLoginValidation = (user)=>{
  const schema = Joi.object({
    email: Joi.string().min(5).max(225).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });
  return schema.validate(user, { abortEarly: false });
}


module.exports = router;