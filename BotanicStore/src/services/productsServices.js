import axios from "axios";

export class ProductsService{
    constructor(){
        this.baseUrl = 'http://127.0.0.1:8000/api/';
        console.log('Url products', this.baseUrl);
    }

    async getProducts(){
        try{
            const productsData = await axios.get(`${this.baseUrl}products/?format=json`);
            return productsData.data;
        }catch(e){
            console.error('Error fetching products:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async getProductsById(id){
        console.log('product id', id);
        try{
            const productsData = await axios.get(`${this.baseUrl}products/${id}/?format=json`);
            return productsData.data;
        }catch(e){
            console.error('Error fetching product by id:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async addProducts(product){
        console.log('Product being sent:', product);
        try{
            const productsData = await axios.post(`${this.baseUrl}products/`, product,
                {
                    headers: {
                    'Content-Type': 'application/json', 
                    }
                }
            );
            return productsData.data;
        }catch(e){
            console.error('Error adding product:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async updateProducts(id, updatedProduct){
        try{
            const productsData = await axios.put(`${this.baseUrl}products/${id}/`, updatedProduct,
                {
                    headers: {
                    'Content-Type': 'application/json', 
                    }
                }
            );
            return productsData.data;
        }catch(e){
            console.error('Error updating product:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async deleteProducts({id}){
        console.log('Producto a eliminar:',id)
        try{
            const productsData = await axios.delete(`${this.baseUrl}products/${id}/ `);
            return productsData.data;
        }catch(e){
            console.error('Error deleting product:', e);
            throw new Error(`Status Code ${e}`);
        };
    }

}