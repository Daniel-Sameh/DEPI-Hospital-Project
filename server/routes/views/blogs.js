const upload = require('../image-uploader');
const express = require("express");
const router = express.Router();
const {Doctors, handleDoctorValidation} = require("../../models/doctors");
const {Blogs, handleBlogValidation} = require("../../models/blogs");
// const {Departments, handleDepartmentValidation} = require("../../models/departments");
require('dotenv').config();
const debug = require("debug")("app:development");
debug.enabled=true;

router.get("/:id", async(req,res)=>{
  res.render("add_blog", {doctor:req.params.id});
})


module.exports = router