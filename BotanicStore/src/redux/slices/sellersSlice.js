import { createSlice } from "@reduxjs/toolkit";
import { getSellers, addSellers, updateSellers, deleteSellers, getSellersById } from "../thunks/sellersThunk";

const sellersSlice = createSlice({
    name:'sellers',
    initialState:{
        sellers:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(addSellers.pending, (state)=>{
            state.loading = true;
        })
        .addCase(addSellers.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(addSellers.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(getSellers.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getSellers.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getSellers.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(getSellersById.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getSellersById.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getSellersById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        
        .addCase(updateSellers.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updateSellers.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(updateSellers.rejected, (state, action)=>
        {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(deleteSellers.pending, (state)=>{
            state.loading = true;
        })
        .addCase(deleteSellers.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(deleteSellers.rejected, (state, action)=>
        {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default sellersSlice.reducer;