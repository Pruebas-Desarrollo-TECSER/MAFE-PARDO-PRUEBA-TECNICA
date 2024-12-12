import AddProduct from "./AddProduct";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts } from "../redux/thunks/productsThunks";


const ProductsList = ()=>{
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await dispatch(getProducts());
            if(getProducts.fulfilled.match(result)){
                const products = result.payload;
                const dataFields = products.map(product =>({
                    idProduct: product.idproduct,
                    name: product.name,
                    description: product.description,
                    quantity: product.quantity,
                    img: product.img,
                    idCategory: product.category_idcategory,
                }));
                setData(dataFields);
                console.log('Products', dataFields);
            } else{
                console.error("Error fetching products", result.error)
            }
        };
        fetchData();
    }, [dispatch]);

    return(
        <>
        <div className="flex justify-center p-5">
            <AddProduct mode="add"></AddProduct>
        </div>
        <div className="flex flex-wrap gap-3 justify-center sm:flex-col md:justify-evenly md:flex-row lg:flex-row lg:justify-between p-16">
            {data.map((product)=>(
                <ProductCard
                key={product.idProduct}
                index={product.idProduct}
                name={product.name}
                description={product.description}
                image={product.img}
                quantity={product.quantity}
                >
                </ProductCard>
            ))
            }
        </div>
        </>
    )
}

export default ProductsList;