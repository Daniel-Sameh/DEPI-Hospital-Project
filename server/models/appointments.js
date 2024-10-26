const Joi = require("joi");
const mongoose = require("mongoose");
const config = require("config");
// const jwt = require("jsonwebtoken");


const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 255
  },
  phone: {
    type: String,
    required: true
  },
  departmentId: {
    type: mongoose.Types.ObjectId,
    ref: "Departments",
    required: true
  },
  date: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return v instanceof Date && !isNaN(v.getTime());
      },
      message: 'Invalid date format'
    }
  }
}, {timestamps:true});

const Appointments = mongoose.model("Appointments", appointmentSchema);

// const objectIdPattern = /^ObjectId\("([a-fA-F0-9]{24})"\)$/;
function handleAppointmentValidation(app) {
  const schema = Joi.object({
    name: Joi.string().min(10).max(255).required(),
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
    date: Joi.date().required(),
  })
  return schema.validate(app, { abortEarly: false });
};

exports.appointmentSchema = appointmentSchema;
exports.Appointments = Appointments;
exports.handleAppointmentValidation = handleAppointmentValidation;