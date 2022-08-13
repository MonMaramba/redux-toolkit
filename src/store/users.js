import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    type: 'Guest',
    user: [],
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload || 'Guest';
    },
  },
});

export const { setType } = userSlice.actions;
export default userSlice.reducer;
