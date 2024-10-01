import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Base_URL = "../data.json";

export const fetchDoctors = createAsyncThunk("doctors/fetchDoctors", async ()=>{
  const response = await axios.get(Base_URL)
  return response.data.doctors;
});

export const fetchDoctor = createAsyncThunk("doctor/fetchDoctors", async (id)=>{
  console.log("Fetching doctor with id data...")
  const response = await axios.get(Base_URL);  // Get the entire JSON content
  console.log(response.data.doctors)
  const doctor = response.data.doctors.find(doc => doc.id === parseInt(id));  // Find doctor by ID
  if (!doctor) {
    throw new Error(`Doctor with ID ${id} not found`);  // Handle case when doctor is not found
  }
  console.log("return doctor: ",doctor)
  return doctor;  // Return the found doctor
})


