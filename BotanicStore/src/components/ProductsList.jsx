import AddProduct from "./AddProduct";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";


const ProductsList = ()=>{

    return(
        <>
        <div className="flex justify-center p-5">
            <AddProduct mode="add"></AddProduct>
        </div>
        <div className="flex flex-wrap gap-3 justify-center sm:flex-col md:justify-evenly md:flex-row lg:flex-row lg:justify-between p-16">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
        </>
    )
}

export default ProductsList;