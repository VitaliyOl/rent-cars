import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://645a20ef65bd868e9311b3b9.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/cars');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
