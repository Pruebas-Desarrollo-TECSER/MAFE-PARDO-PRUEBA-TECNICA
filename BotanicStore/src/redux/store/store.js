import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import categoriesReducer from "../slices/categoriesSlice";
import sellersReducer from "../slices/sellersSlice";
import salesReducer from "../slices/salesSlice";

const store = configureStore({
    reducer:{
        products: productsReducer,
        categories :categoriesReducer,
        sellers :  sellersReducer,
        sales : salesReducer,
    }
})
export default store; 