const {Blogs, handleBlogValidation } = require("../models/blogs");
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require('bcrypt');
const upload = require("../routes/image-uploader");
const auth = require("../middleware/auth");
const { Doctors } = require("../models/doctors");

////////////////////////////////////////////////////////////////////////
//GET all blogs:
router.get("/", async (req,res)=>{
  try{
    const blogs = await Blogs.find();
    res.status(200).send(blogs);
  }catch(err){
    res.status(500).send("Couldn't get all blogs");
  }
});
////////////////////////////////////////////////////////////////////////
//GET a blog by ID:
router.get("/:id", async(req,res)=>{
  const blog= await Blogs.findById(req.params.id);
  if(!blog){
    res.status(404).send("No blog with the given id");
  }else{
    res.status(200).send(blog);
  }
});
////////////////////////////////////////////////////////////////////////
//POST a blog:
router.post("/", auth, upload.single('image'), async(req,res)=>{
  const {error} = handleBlogValidation(req.body);
  if (error){
    const errorMsg = error.details.map((err) => err.message);
    return res.status(400).send(errorMsg);
  }

  let doctor = await Doctors.findById(req.body.author);
  if(!doctor) return res.status(404).send("There is no doctor with the given id");

  if(!req.file){
    return res.status(400).send("Blog image is required");
  }

  const blog= new Blogs(_.pick(req.body, ['title', 'body','author','image']));
  blog.image= req.file.path;

  try{
    await blog.save();
    res.status(201).send(blog);
  }catch(err){
    res.status(500).send("Couldn't save the given blog");
  }
});
////////////////////////////////////////////////////////////////////////
//PUT(update) a blog:
router.put("/:id", auth, upload.single('image'), async(req,res)=>{
  let blog= await Blogs.findById(req.params.id);
  if(!blog) return res.status(404).send("No blog with the given id was found");

  let updatedBlog = _.pick(blog, ['title','body','image','author']);
  _.assign(updatedBlog, _.pick(req.body, ['title','body']));
  
  if(req.file){
    updatedBlog.image= req.file.path;
  }
  const {error} = handleBlogValidation(updatedBlog);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }
  try{
    blog = await Blogs.findByIdAndUpdate(req.params.id, updatedBlog,{new:true});
    res.status(200).send(blog);
  }catch(err){
    return res.status(500).send({message:"Internal server error"});
  }

});
/////////////////////////////////////////////////////////////////////////
//DELETE a blog:
router.delete("/:id", auth, async(req,res)=>{
  try {
    let blog = await Blogs.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).send("No blog with the given id was found");
    }
    // you should be the author to delete the blog
    if(blog.author!=req.user._id){
      return res.status(403).send({message:"Forbidden"});
    }
    blog = await Blogs.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({message:"Internal server error"});
  }
});

module.exports = router;