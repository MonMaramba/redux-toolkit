import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', // thunkAPI is the 2nd argument

  async (obj, thunkAPI) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');

      return res.data;
      // will return 3 things pending, resolved, rejected
    } catch (err) {
      return thunkAPI.rejectWithValue('Yikes!');
    }
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    type: 'Guest',
    users: [],
    loading: false,
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload || 'Guest';
    },
    getUser: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) =>
        console.log(action.payload)
      );
  },
});

export const { setType } = userSlice.actions;
export default userSlice.reducer;
