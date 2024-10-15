const Joi = require("joi");
const mongoose = require("mongoose");
const config= require("config");
// const jwt = require("jsonwebtoken");

const blogSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true
  },
  body: {
    type: String,
    required: true,
    minlength: 20
  },
  image:{
    type: String,
    required: true
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "Doctors",
    required: true
  }
});

const Blogs = mongoose.model("Blogs", blogSchema);

function handleBlogValidation(blog){
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    body: Joi.string().min(20).required(),
    // image: Joi.string().required(),
    author: Joi.alternatives().try(
      Joi.string().hex().length(24), // 24-character hex string
      Joi.custom((value, helpers) => {
        // Check if value is a valid Mongoose ObjectId
        if (mongoose.Types.ObjectId.isValid(value) && new mongoose.Types.ObjectId(value).toString() === value.toString()) {
          return value;
        }
        return helpers.error('any.invalid'); // If not, trigger validation error
      })
    ).required(),
  });
  return schema.validate(blog, { abortEarly: false });
};

exports.Blogs= Blogs;
exports.handleBlogValidation= handleBlogValidation;