const { createSlice } = require("@reduxjs/toolkit");

const filtersInitialState = { filter: "" };

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    filteredContact(state, action) {
      // return action.payload;
      state.filter = action.payload;
    },
  },
});

export const { filteredContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
