const {Appointments, handleAppointmentValidation} = require("../models/appointments");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require('bcrypt');
const upload = require("../routes/image-uploader");
const auth = require("../middleware/auth");
const { Departments } = require("../models/departments");
const Joi = require("joi");

require('dotenv').config();
const debug = require("debug")("app:development");
debug.enabled=true;

////////////////////////////////////////////////////////////////////////
//GET all appointments:
router.get("/", async(req,res)=>{
  try{
    const appointments= await Appointments.find();
    res.status(200).send(appointments);
  }catch(err){
    res.status(500),json({ error: 'Failed to fetch appointments' });
  }
});
////////////////////////////////////////////////////////////////////////
//GET an appointment by id:
router.get("/:id", async (req,res)=>{
  const appointment= await Appointments.findById(req.params.id);
  if(!appointment){
    return res.status(404).send("No appointment with the given id!");
  }
  res.send(appointment);
});
////////////////////////////////////////////////////////////////////////
//POST(register/signUp) an appointment: 
router.post("/",async(req,res)=>{
  const {error} = handleAppointmentValidation(req.body);
  if(error){
    const errorMsg = error.details.map((err) => err.message);
    return res.status(400).send(errorMsg);
  }
  
  //Check if the department exist or not
  let department= await Departments.findById(req.body.departmentId);
  if(!department) return res.status(404).send("There is no department with the given id");

  const appointment = new Appointments(_.pick(req.body, ['name', 'phone','departmentId','date'])); 

  try{
    //Save the appointment in the database
    await appointment.save();
    res.status(201).send(appointment); 
  }catch(err){
    return res.status(500).send(err);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Update (PUT) a doctor by Id: 
router.put("/:id", auth, async (req,res)=>{
  // if(req.role!='doctor'){
  //   return res.status(403).send({message: "Forbidden"});
  // }
  if(req.body.departmentId){
    const department = await Departments.findById(req.body.departmentId);
    if (!department) return res.status(400).send('Invalid department');
  }
  
  //Finding the appointment with id:
  let appointment = await Appointments.findById(req.params.id);
  if (!appointment) return res.status(404).send('The appointment with the given ID was not found');

  //Make the updated doctor
  let updatedAppointment = _.pick(appointment, ['name', 'phone', 'departmentId', 'date']);
  _.assign(updatedAppointment, _.pick(req.body, ['name', 'phone','departmentId', 'date']));
  // debug("the updated doctor: ",updatedAppointment);
  // debug("THE DEPARTMENT: ",updatedAppointment.departmentId);
  const { error } = handleAppointmentValidation(updatedAppointment);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }
  try{
    appointment = await Appointments.findByIdAndUpdate(req.params.id, updatedAppointment, {new:true});
    res.status(200).send(appointment);
  }catch(err){
    res.status(500).send("Couldn't update the given appointment");
  } 

});
///////////////////////////////////////////////////////////////////////////////
//DELETE a appointment:
router.delete("/:id", auth, async(req,res)=>{
  // debug(req.user);
  // if(req.user._id != req.params.id){
  //   return res.status(403).send({message:"Forbidden"});
  // }
  try {
    let appointment = await Appointments.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).send("No appointment with the given id was found");
    }
    appointment = await Appointments.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during a appointment deletion");
  }
});
////////////////////////////////////////////////////////////////////////////

module.exports = router;