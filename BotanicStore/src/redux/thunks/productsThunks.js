import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsService } from "../../services/productsServices";

const productsServices = new ProductsService();

export const getProducts = createAsyncThunk(
    'products/get',
    async()=>{
        const data = await productsServices.getProducts();
        return data;
    }
);
export const getProductsById = createAsyncThunk(
    'products/getById',
    async(id)=>{
        const data = await productsServices.getProductsById(id);
        return data;
    }
);
export const addProducts = createAsyncThunk(
    'products/add',
    async(product)=>{
        console.log('Producto en el thunk', product);
        const response = await productsServices.addProducts(product);
        return response;
    }
);
export const updateProducts = createAsyncThunk(
    'products/update',
    async(id, updateProduct)=>{
        const response = await productsServices.updateProducts(id, updateProduct);
        return response;
    }
);
export const deleteProducts = createAsyncThunk(
    'products/delete',
    async(id)=>{
        const response = await productsServices.deleteProducts(id);
    }
);