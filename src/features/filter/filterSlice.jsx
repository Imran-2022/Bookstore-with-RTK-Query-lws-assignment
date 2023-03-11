import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    byType:'all',
    bySearch:'',
};

// create slice
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterByType: (state, action) => {
            state.byType = action.payload;
        },
        filterBySearch:(state, action) => {
            state.bySearch = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { filterByType, filterBySearch } = filterSlice.actions;