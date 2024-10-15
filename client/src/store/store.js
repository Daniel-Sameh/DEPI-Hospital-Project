import { configureStore } from "@reduxjs/toolkit";
import doctorsSlice from "../reducers/doctorsSlice";
import  blogsSlice  from "../reducers/blogsSlice";

export default configureStore({
  reducer:{
    doctorsData: doctorsSlice,
    blogsData: blogsSlice,
  }
});