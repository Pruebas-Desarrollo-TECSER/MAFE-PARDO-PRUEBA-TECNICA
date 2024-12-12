import { createSlice } from "@reduxjs/toolkit";
import { getCategories, addCategories, updateCategories, deleteCategories } from "../thunks/categoriesThunks";

const categoriesSlice = createSlice({
    name:'categories',
    initialState:{
        categories:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getCategories.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getCategories.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getCategories.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        
        .addCase(updateCategories.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updateCategories.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(updateCategories.rejected, (state, action)=>
        {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(deleteCategories.pending, (state)=>{
            state.loading = true;
        })
        .addCase(deleteCategories.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(deleteCategories.rejected, (state, action)=>
        {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default categoriesSlice.reducer;