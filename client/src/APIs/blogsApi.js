import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Base_URL = "../data.json";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async ()=>{
  const response = await axios.get(Base_URL)
  return response.data.blogs;
});

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id)=>{
  console.log("Fetching blog with id data...")
  const response = await axios.get(Base_URL);  // Get the entire JSON content
  console.log(response.data.blogs)
  const blog = response.data.blogs.find(blg => blg._id === id);  // Find blog by ID
  if (!blog) {
    throw new Error(`blog with ID ${id} not found`);  // Handle case when blog is not found
  }
  console.log("return blog: ",blog)
  return blog;  // Return the found doctor
})


