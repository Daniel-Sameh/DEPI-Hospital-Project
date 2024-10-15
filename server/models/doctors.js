const Joi = require("joi");
const mongoose = require("mongoose");
const config= require("config");
const jwt = require("jsonwebtoken");


const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 255
  },
  // specialization:{
  //   type: String,
  //   required: true,
  //   minlength: 10
  // },
  email:{
    type: String,
    required: true,
    validate: {
      validator: function(v){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(v);
      },
      message:"Invalid email format"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
  phone:{
    type:String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  schedule:{
    type: [String]
  },
  departmentId:{
    type: mongoose.Types.ObjectId,
    ref: "Departments",
    required: true
  }
});

doctorSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({_id: this.id, name: this.name}, config.get("jwtPrivateKey"));
  return token;
}

const Doctors = mongoose.model("Doctors", doctorSchema);

// const objectIdPattern = /^ObjectId\("([a-fA-F0-9]{24})"\)$/;
function handleDoctorValidation(doctor){
  const schema = Joi.object({
    name: Joi.string().min(10).max(255).required(),
    // specialization: Joi.string().min(10).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(5).max(1024).required(),
    phone: Joi.string().required(),
    departmentId: Joi.alternatives().try(
      Joi.string().hex().length(24), // 24-character hex string
      Joi.custom((value, helpers) => {
        // Check if value is a valid Mongoose ObjectId
        if (mongoose.Types.ObjectId.isValid(value) && new mongoose.Types.ObjectId(value).toString() === value.toString()) {
          return value;
        }
        return helpers.error('any.invalid'); // If not, trigger validation error
      })
    ).required(),
    schedule: Joi.array().items(Joi.string()),
    // image: Joi.string().required(),
  })
  return schema.validate(doctor, { abortEarly: false });
};

exports.doctorSchema= doctorSchema;
exports.Doctors= Doctors;
exports.handleDoctorValidation = handleDoctorValidation;