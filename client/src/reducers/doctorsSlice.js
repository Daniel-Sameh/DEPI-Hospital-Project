import { createSlice } from "@reduxjs/toolkit";
import { fetchDoctors, fetchDoctor } from "../APIs/doctorsApi";

export const doctorsSlice = createSlice({
  name:"doctorsData",
  initialState:{
    doctors: [],
    doctor: [],
  },
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchDoctors.fulfilled, (state, action)=>{
      state.doctors= action.payload;
    })
    builder.addCase(fetchDoctors.rejected, (state,action)=>{
      console.log("ERROR in fetching DoctorS");
    });
    builder.addCase(fetchDoctor.fulfilled, (state,action)=>{
      state.doctor= action.payload;
      console.log("STATE:", state.doctor)
    })
  }
})

export default doctorsSlice.reducer;