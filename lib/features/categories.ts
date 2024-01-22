import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchCategories } from "../fetchFunctions/fetchCategories";

export const loadCategories = createAsyncThunk('categories/loadCategories',
    async () => {
        const response = await fetchCategories();
        return response;
    }
);

type initialState = {
    categories: string[],
    isLoading: boolean,
    isError: boolean
}

const initialState: initialState = {
    categories: [],
    isLoading: false,
    isError: false
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadCategories.pending, state => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(loadCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
            state.isLoading = false;
            state.isError = false;
        })
        .addCase(loadCategories.rejected,  state => {
            state.isLoading = false;
            state.isError = true;
        })
    }
});

export const selectCategories = (state: RootState) => state.categories;
export default categoriesSlice.reducer;