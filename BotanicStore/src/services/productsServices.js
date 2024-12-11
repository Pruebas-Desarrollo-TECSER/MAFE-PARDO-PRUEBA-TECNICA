import axios from "axios";

export class ProductsService{
    constructor(){
        this.baseUrl = 'url_local_project';
        console.log('Url products', this.baseUrl);
    }

    async getProducts(){
        try{
            const productsData = await axios.get(`${this.baseUrl}products`);
            return productsData.data;
        }catch(e){
            console.error('Error fetching products:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async addProducts({product}){
        try{
            const productsData = await axios.post(`${this.baseUrl}products`, product);
            return productsData.data;
        }catch(e){
            console.error('Error adding product:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async updateProducts({id, updatedProduct}){
        try{
            const productsData = await axios.put(`${this.baseUrl}products/${id}`, updatedProduct);
            return productsData.data;
        }catch(e){
            console.error('Error updating product:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async deleteProducts({id}){
        try{
            const productsData = await axios.delete(`${this.baseUrl}products/${id}`);
            return productsData.data;
        }catch(e){
            console.error('Error deleting product:', e);
            throw new Error(`Status Code ${e}`);
        };
    }

}