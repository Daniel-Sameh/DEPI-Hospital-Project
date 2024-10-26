import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDoctors,
  fetchDoctor,
  addDoctor,
  updateDoctor,
  deleteDoctor,
  loginDoctor, 
} from "../APIs/doctorsApi";

export const doctorsSlice = createSlice({
  name: "doctorsData",
  initialState: {
    doctors: [],
    doctor: null,
    error: null,
    auth: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all doctors
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.error = "Failed to fetch doctors";
        console.log("ERROR in fetching Doctors");
      })
      // Fetch a doctor by ID
      .addCase(fetchDoctor.fulfilled, (state, action) => {
        state.doctor = action.payload;
        console.log("Fetched doctor:", state.doctor);
      })
      .addCase(fetchDoctor.rejected, (state, action) => {
        state.error = "Failed to fetch the doctor";
        console.log("ERROR in fetching the doctor");
      })
      // Add a new doctor
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.doctors.push(action.payload);
        // Store the token from the response if available
        const token = action.payload.token;
        if (token) {
          state.auth = token;
          localStorage.setItem("x-auth-token", token); // Store the token in localStorage
        }
        console.log("Added doctor:", action.payload);
      })
      .addCase(addDoctor.rejected, (state, action) => {
        state.error = "Failed to add the doctor";
        console.log("ERROR in adding the doctor");
      })
      // Update a doctor
      .addCase(updateDoctor.fulfilled, (state, action) => {
        const index = state.doctors.findIndex(
          (doctor) => doctor.id === action.payload.id
        );
        if (index !== -1) {
          state.doctors[index] = action.payload;
          console.log("Updated doctor:", action.payload);
        }
      })
      .addCase(updateDoctor.rejected, (state, action) => {
        state.error = "Failed to update the doctor";
        console.log("ERROR in updating the doctor");
      })
      // Delete a doctor
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.doctors = state.doctors.filter(
          (doctor) => doctor.id !== action.payload
        );
        console.log("Deleted doctor with ID:", action.payload);
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.error = "Failed to delete the doctor";
        console.log("ERROR in deleting the doctor");
      })
      // Login a doctor
      .addCase(loginDoctor.fulfilled, (state, action) => {
        const token = action.payload.token; 
        if (token) {
          state.auth = token;
          localStorage.setItem("x-auth-token", token);
        }
        console.log("Login successful, token:", token);
      })
      .addCase(loginDoctor.rejected, (state, action) => {
        state.error = "Failed to log in";
        console.log("ERROR in logging in");
      });
  },
});

export default doctorsSlice.reducer;
