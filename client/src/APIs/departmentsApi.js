import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Base_URL = "http://localhost:5000/api/departments";

// Fetch all departments
export const fetchDepartments = createAsyncThunk("departments/fetchDepartments", async () => {
  const response = await axios.get(Base_URL);
  return response.data; // Adjust based on your backend response structure
});

// Fetch a single department by ID
export const fetchDepartment = createAsyncThunk("departments/fetchDepartment", async (id) => {
  console.log("Fetching department with id data...");
  const response = await axios.get(`${Base_URL}/${id}`);
  const department = response.data; // Adjust based on your backend response structure
  if (!department) {
    throw new Error(`Department with ID ${id} not found`); // Handle case when department is not found
  }
  console.log("return department: ", department);
  return department; // Return the found department
});

// Add a new department
export const addDepartment = createAsyncThunk("departments/addDepartment", async (department, { getState, rejectWithValue }) => {
  try {
    const state = getState(); // Get the current state
    const token = state.doctorsData.auth; // Retrieve the auth token from the state
    const response = await axios.post(Base_URL, department, {
      headers: {
        "x-auth-token": token, // Send the auth token
      },
    });
    return response.data; // Return the created department
  } catch (error) {
    return rejectWithValue(error.response.data); // Handle errors
  }
});

// Update an existing department
export const updateDepartment = createAsyncThunk("departments/updateDepartment", async ({ id, department }, { getState, rejectWithValue }) => {
  try {
    const state = getState(); // Get the current state
    const token = state.doctorsData.auth; // Retrieve the auth token from the state
    const response = await axios.put(`${Base_URL}/${id}`, department, {
      headers: {
        "x-auth-token": token, // Send the auth token
      },
    });
    return response.data; // Return the updated department
  } catch (error) {
    return rejectWithValue(error.response.data); // Handle errors
  }
});

// Delete a department
export const deleteDepartment = createAsyncThunk("departments/deleteDepartment", async (id, { getState, rejectWithValue }) => {
  try {
    const state = getState(); // Get the current state
    const token = state.doctorsData.auth; // Retrieve the auth token from the state
    await axios.delete(`${Base_URL}/${id}`, {
      headers: {
        "x-auth-token": token, // Send the auth token
      },
    });
    return id; // Return the ID of the deleted department
  } catch (error) {
    return rejectWithValue(error.response.data); // Handle errors
  }
});
