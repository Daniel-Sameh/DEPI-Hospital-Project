const upload = require('../image-uploader');
const express = require("express");
const router = express.Router();
const {Doctors, handleDoctorValidation} = require("../../models/doctors");
const {Blogs, handleBlogValidation} = require("../../models/blogs");
const {Departments, handleDepartmentValidation} = require("../../models/departments");
require('dotenv').config();
const debug = require("debug")("app:development");
debug.enabled=true;

// Get all doctors
router.get("/", async (req, res) => {
  const doctors = await Doctors.find().sort("name");
  res.render("doctors", { doctors }); // render the doctors html (ejs)
});

/////////////////////////////////////////////////////
//Doctor Register:
router.get("/register", async(req,res)=>{
  debug("We are in doctor register in views...");
  try{
    departments = await Departments.find({});
    debug("Fetched departments: ",departments);
    res.render("register", {departments});
  }catch(err){
    res.status(500).send({message:"Internal server error when fetching departments for register"});
  }
});
//////////////////////////////////////////////////////
//Get by id:
router.get("/:id", async(req,res)=>{
  debug("I am in doctor by id");
  const doctor = await Doctors.findById(req.params.id);
  if (!doctor) {
    return res.status(404).send("the doctor is not available");
  }
  res.render("view_doctor", { doctor });
});
//////////////////////////////////////////////////////


module.exports = router