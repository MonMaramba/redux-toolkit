import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (thunkAPI) => {
    const res = await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.data);
    return res;
    // will return 3 things pending, resolved, rejected
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    type: 'Guest',
    users: [],
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
        console.log('pending');
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        console.log(state);
      })
      .addCase(fetchUsers.rejected, (state) => console.log('rejected'));
  },
});

export const { setType } = userSlice.actions;
export default userSlice.reducer;
