import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    onChangeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { onChangeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
