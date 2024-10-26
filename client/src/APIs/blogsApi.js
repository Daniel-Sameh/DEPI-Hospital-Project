import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Base_URL = "http://localhost:5000/api/blogs";

// Fetch all blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get(Base_URL);
  return response.data;
});

// Fetch a single blog by ID
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  console.log("Fetching blog with id data...");
  const response = await axios.get(`${Base_URL}/${id}`);
  const blog = response.data;
  if (!blog) {
    throw new Error(`Blog with ID ${id} not found`); // Handle case when blog is not found
  }
  console.log("return blog: ", blog);
  return blog; // Return the found blog
});

// Add a new blog
export const addBlog = createAsyncThunk("blog/addBlog", async (blog, thunkAPI) => {
  try {
    const formData = new FormData();
    const state = thunkAPI.getState();
    const token = state.doctorsData.auth;
    for (const key in blog) {
      formData.append(key, blog[key]);
    }
    const response = await axios.post(Base_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Update an existing blog
export const updateBlog = createAsyncThunk("blog/updateBlog", async ({ id, blog }, thunkAPI) => {
  try {
    const formData = new FormData();
    const state = thunkAPI.getState();
    const token = state.doctorsData.auth;
    for (const key in blog) {
      formData.append(key, blog[key]);
    }
    const response = await axios.put(`${Base_URL}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": token,
      },
    });
    return response.data; // Return the updated blog data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Delete a blog
export const deleteBlog = createAsyncThunk("blog/deleteBlog", async ({ id }, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.doctorsData.auth; // Function to retrieve the auth token (implement this function)
    await axios.delete(`${Base_URL}/${id}`, {
      headers: {
        "x-auth-token": token,
      },
    });
    return id; // Return the ID of the deleted blog
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});


