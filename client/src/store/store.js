import { configureStore } from "@reduxjs/toolkit";
import doctorsSlice from "../reducers/doctorsSlice";
import  blogsSlice  from "../reducers/blogsSlice";
import  departmentsSlice  from "../reducers/departmentsSlice";

export default configureStore({
  reducer:{
    doctorsData: doctorsSlice,
    blogsData: blogsSlice,
    departmentsData: departmentsSlice,
  }
});