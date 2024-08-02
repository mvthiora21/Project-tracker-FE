import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/projects');
      return response.data;
    } catch (err) {
      console.error('Error fetching projects:', err);
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const addProject = createAsyncThunk(
  'projects/addProject',
  async (newProject, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/projects', newProject);
      return response.data;
    } catch (err) {
      console.error('Error adding project:', err);
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { projects: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
      });
  },
});

export default projectsSlice.reducer;