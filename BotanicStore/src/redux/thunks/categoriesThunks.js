import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesService } from "../../services/categoriesServices";

const categoriesServices = new CategoriesService();

export const getCategories = createAsyncThunk(
    'categories/get',
    async()=>{
        const data = await categoriesServices.getCategories();
        return data;
    }
);
export const addCategories = createAsyncThunk(
    'categories/add',
    async(product)=>{
        const response = await categoriesServices.addCategories(product);
        return response;
    }
);
export const updateCategories = createAsyncThunk(
    'categories/update',
    async(id, updateProduct)=>{
        const response = await categoriesServices.updateCategories(id, updateProduct);
        return response;
    }
);
export const deleteCategories = createAsyncThunk(
    'categories/delete',
    async(id)=>{
        const response = await categoriesServices.deleteCategories(id);
    }
);