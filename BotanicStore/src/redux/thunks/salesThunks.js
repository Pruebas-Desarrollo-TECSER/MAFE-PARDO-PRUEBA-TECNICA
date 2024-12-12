import { createAsyncThunk } from "@reduxjs/toolkit";
import { SalesService } from "../../services/salesServices";

const salesServices = new SalesService();

export const getSales = createAsyncThunk(
    'sales/get',
    async()=>{
        const data = await salesServices.getSales();
        return data;
    }
);
export const getSalesById = createAsyncThunk(
    'sales/getById',
    async(id)=>{
        const data = await salesServices.getSalesById(id);
        return data;
    }
);
export const addSales = createAsyncThunk(
    'sales/add',
    async(sale)=>{
        console.log('Producto en el thunk', sale);
        const response = await salesServices.addSales(sale);
        return response;
    }
);
export const updateSales = createAsyncThunk(
    'sales/update',
    async({id, updateProduct})=>{
        console.log("Thunk: data being sent to backend:", { id, updateProduct });
        const response = await salesServices.updateSales(id, updateProduct);
        return response;
    }
);
export const deleteSales = createAsyncThunk(
    'sales/delete',
    async(id)=>{
        console.log("Thunk: data being sent to backend:", { id });
        const response = await salesServices.deleteSales({id});
    }
);