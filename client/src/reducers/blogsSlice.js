import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs, fetchBlog } from "../APIs/blogsApi";

export const blogsSlice = createSlice({
  name:"blogsData",
  initialState:{
    blogs:[],
    blog:[]
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchBlogs.fulfilled,(state,action)=>{
      state.blogs=action.payload;
    })
    builder.addCase(fetchBlog.fulfilled, (state,action)=>{
      state.blog=action.payload;
    })
  }
})

export default blogsSlice.reducer;