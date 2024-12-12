import { createSlice } from "@reduxjs/toolkit";
import { getProducts, addProducts, updateProducts, deleteProducts, getProductsById } from "../thunks/productsThunks";

const productsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(addProducts.pending, (state)=>{
            state.loading = true;
        })
        .addCase(addProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(addProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(getProducts.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(getProductsById.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getProductsById.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getProductsById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        
        .addCase(updateProducts.pending, (state)=>{
            state.loading = true;
        })
        .addCase(updateProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(updateProducts.rejected, (state, action)=>
        {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(deleteProducts.pending, (state)=>{
            state.loading = true;
        })
        .addCase(deleteProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(deleteProducts.rejected, (state, action)=>
        {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default productsSlice.reducer;