import { createAsyncThunk } from "@reduxjs/toolkit";
import { SellersService } from "../../services/sellersServices";

const sellersServices = new SellersService();

export const getSellers = createAsyncThunk(
    'sellers/get',
    async()=>{
        const data = await sellersServices.getSellers();
        return data;
    }
);
export const getSellersById = createAsyncThunk(
    'sellers/getById',
    async(id)=>{
        const data = await sellersServices.getSellersById(id);
        return data;
    }
);
export const addSellers = createAsyncThunk(
    'sellers/add',
    async(seller)=>{
        console.log('Producto en el thunk', seller);
        const response = await sellersServices.addSellers(seller);
        return response;
    }
);
export const updateSellers = createAsyncThunk(
    'sellers/update',
    async({id, updateProduct})=>{
        console.log("Thunk: data being sent to backend:", { id, updateProduct });
        const response = await sellersServices.updateSellers(id, updateProduct);
        return response;
    }
);
export const deleteSellers = createAsyncThunk(
    'sellers/delete',
    async(id)=>{
        console.log("Thunk: data being sent to backend:", { id });
        const response = await sellersServices.deleteSellers({id});
    }
);