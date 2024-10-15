const Joi = require("joi");
const mongoose = require("mongoose");
const config= require("config");
// const jwt = require("jsonwebtoken");

const departmentSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  desc: {
    type: String,
    required: true,
    minlength: 20
  }
});

const Departments = mongoose.model("Departments", departmentSchema);

function handleDepartmentValidation(department){
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    desc: Joi.string().min(20).required(),
  });
  return schema.validate(department, { abortEarly: false });
};

exports.Departments= Departments;
exports.handleDepartmentValidation= handleDepartmentValidation;