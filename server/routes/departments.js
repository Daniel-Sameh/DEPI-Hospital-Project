const {Departments, handleDepartmentValidation} = require("../models/departments");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require('bcrypt');
const upload = require("../routes/image-uploader");
const auth = require("../middleware/auth");

////////////////////////////////////////////////////////////////////////
//GET all departments:
router.get("/", async (req,res)=>{
  try{
    const departments = await Departments.find();
    res.status(200).send(departments);
  }catch(err){
    res.status(500).send("Couldn't get all departments");
  }
});
////////////////////////////////////////////////////////////////////////
//GET a department by ID:
router.get("/:id", async(req,res)=>{
  const department= await Departments.findById(req.params.id);
  if(!department){
    res.status(404).send("No department with the given id");
  }else{
    res.status(200).send(department);
  }
});
////////////////////////////////////////////////////////////////////////
//POST a department:
router.post("/", auth,async(req,res)=>{
  const {error} = handleDepartmentValidation(req.body);
  if (error){
    const errorMsg = error.details.map((err) => err.message);
    return res.status(400).send(errorMsg);
  }

  const department= new Departments(_.pick(req.body, ['name', 'desc']));
  try{
    await department.save();
    res.status(201).send(department);
  }catch(err){
    res.status(500).send("Couldn't save the given department");
  }
});
////////////////////////////////////////////////////////////////////////
//Update (PUT) a department:
router.put("/:id", auth, async(req,res)=>{
  let department = await Departments.findById(req.params.id);
  if(!department) return res.status(404).send("No department with the given id");

  if(!req.body.name&&!req.body.desc){
    return res.status(400).send("There should be some updates on the current department");
  }

  let updatedDep = _.pick(department, ['name', 'desc']);
  _.assign(updatedDep, _.pick(req.body,['name', 'desc']));
  debug("Updated Department: ",updatedDep); // the problem might be here...

  const {error} = handleDepartmentValidation(updatedDep);
  if(error){
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }
  
  try{
    department = await Departments.findByIdAndUpdate(req.params.id, updatedDep, {new:true});
    res.status(200).send(department);
  }catch(err){
    return res.status(500).send("Internal Server error in department update");
  }

});
////////////////////////////////////////////////////////////////////////
//DELETE a department:
router.delete("/:id", auth, async(req,res)=>{
  try {
    const department = await Departments.findByIdAndDelete(req.params.id);
    if (!department) {
      return res.status(404).send("No department with the given id was found");
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during a department deletion");
  }
});

module.exports= router;