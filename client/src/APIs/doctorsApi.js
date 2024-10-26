import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Base_URL = "http://localhost:5000/api/doctors";


// Fetch all doctors
export const fetchDoctors = createAsyncThunk("doctors/fetchDoctors", async (_, thunkAPI) => {
  try {
    const response = await axios.get(Base_URL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Fetch a doctor by ID
export const fetchDoctor = createAsyncThunk("doctor/fetchDoctor", async (id, thunkAPI) => {
  try {
    console.log("DOCTOR ID::: ", id);
    const response = await axios.get(`${Base_URL}/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Add a new doctor (sign-up/register)
export const addDoctor = createAsyncThunk("doctor/addDoctor", async (doctorData, thunkAPI) => {
  try {
    const formData = new FormData();
    for (const key in doctorData) {
      formData.append(key, doctorData[key]);
    }
    const response = await axios.post(Base_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Update a doctor
export const updateDoctor = createAsyncThunk("doctor/updateDoctor", async ({ id, updatedData }, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.doctorsData.auth;
    const formData = new FormData();
    for (const key in updatedData) {
      formData.append(key, updatedData[key]);
    }
    const response = await axios.put(`${Base_URL}/${id}`, formData, {
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

// Delete a doctor
export const deleteDoctor = createAsyncThunk("doctor/deleteDoctor", async (id, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.doctorsData.auth;
    await axios.delete(`${Base_URL}/${id}`, {
      headers: {
        "x-auth-token": token,
      },
    });
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Login a doctor
export const loginDoctor = createAsyncThunk("doctor/loginDoctor", async (loginData, thunkAPI) => {
  try {
    const response = await axios.post(`${Base_URL}/login`, loginData);
    // Return the token and user data
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});