import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [
      { id: 1, title: 'Crimson Tide' },
      { id: 2, title: 'Boogie Nights' },
    ],
  },
  reducers: {
    addMovie: (state, action) => {
      // const newMovie = { id: 3, title: 'Batman' };
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
