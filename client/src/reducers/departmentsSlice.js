import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDepartments,
  fetchDepartment,
  addDepartment,
  updateDepartment,
  deleteDepartment,
} from "../APIs/departmentsApi";

export const departmentsSlice = createSlice({
  name: "departmentsData",
  initialState: {
    departments: [],
    department: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.status = "loading"; // Set loading state
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set succeeded state
        state.departments = action.payload; // Add fetched departments to state
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.status = "failed"; // Set failed state
        state.error = action.error.message; // Capture error message
      })
      .addCase(fetchDepartment.pending, (state) => {
        state.status = "loading"; // Set loading state
      })
      .addCase(fetchDepartment.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set succeeded state
        state.department = action.payload; // Add fetched department to state
      })
      .addCase(fetchDepartment.rejected, (state, action) => {
        state.status = "failed"; // Set failed state
        state.error = action.error.message; // Capture error message
      })
      .addCase(addDepartment.fulfilled, (state, action) => {
        state.departments.push(action.payload); // Add the new department to the state
      })
      .addCase(updateDepartment.fulfilled, (state, action) => {
        const index = state.departments.findIndex(dept => dept.id === action.payload.id);
        if (index !== -1) {
          state.departments[index] = action.payload; // Update the department in the state
        }
      })
      .addCase(deleteDepartment.fulfilled, (state, action) => {
        state.departments = state.departments.filter(dept => dept.id !== action.payload); // Remove the deleted department from the state
      });
  },
});

export default departmentsSlice.reducer;
