const { createSlice } = require('@reduxjs/toolkit');

const filtersInitialState = { filter: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;