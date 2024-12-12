import { createSlice } from "@reduxjs/toolkit";
import { getSales, addSales, updateSales, deleteSales, getSalesById } from "../thunks/salesThunks";

const salesSlice = createSlice({
    name:'sales',
    initialState:{
        sales:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(addSales.pending, (state)=>{
            state.loading = true;
        })
        .addCase(addSales.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(addSales.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(getSales.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getSales.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getSales.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(getSalesById.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getSalesById.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getSalesById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        
        .addCase(updateSales.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updateSales.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(updateSales.rejected, (state, action)=>
        {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(deleteSales.pending, (state)=>{
            state.loading = true;
        })
        .addCase(deleteSales.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(deleteSales.rejected, (state, action)=>
        {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default salesSlice.reducer;