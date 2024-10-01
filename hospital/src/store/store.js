import { configureStore } from "@reduxjs/toolkit";
import doctorsSlice from "../reducers/doctorsSlice";

export default configureStore({
  reducer:{
    doctorsData: doctorsSlice,
  }
});