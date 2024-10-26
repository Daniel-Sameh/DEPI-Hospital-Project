const upload = require('../image-uploader');
const express = require("express");
const router = express.Router();
// const {Doctors, handleDoctorValidation} = require("../../models/doctors");
// const {Blogs, handleBlogValidation} = require("../../models/blogs");
const {Departments, handleDepartmentValidation} = require("../../models/departments");
const {Appointments} = require("../../models/appointments");
require('dotenv').config();
const debug = require("debug")("app:development");
debug.enabled=true;


router.get("/:id", async(req,res)=>{
  try{
    const department = await Departments.findById(req.params.id);
    const appointments = await Appointments.find({departmentId:req.params.id});
    res.render("department", {appointments: appointments, department: department.name});
  }catch(err){
    res.status(400).send({message:"Not Found"});
  }
});




module.exports = router