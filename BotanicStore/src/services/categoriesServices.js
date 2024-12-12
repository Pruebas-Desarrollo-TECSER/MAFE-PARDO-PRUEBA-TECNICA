import axios from "axios";

export class CategoriesService{
    constructor(){
        this.baseUrl = 'http://127.0.0.1:8000/api/';
        console.log('Url categories', this.baseUrl);
    }

    async getCategories(){
        try{
            const categoriesData = await axios.get(`${this.baseUrl}categories/?format=json`);
            return categoriesData.data;
        }catch(e){
            console.error('Error fetching categories:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async addCategories({category}){
        try{
            const categoriesData = await axios.post(`${this.baseUrl}categories`, category);
            return categoriesData.data;
        }catch(e){
            console.error('Error adding category:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async updateCategories({id, updatedcategory}){
        try{
            const categoriesData = await axios.put(`${this.baseUrl}categories/${id}/?format=json`, updatedcategory);
            return categoriesData.data;
        }catch(e){
            console.error('Error updating category:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async deleteCategories({id}){
        try{
            const categoriesData = await axios.delete(`${this.baseUrl}categories/${id}`);
            return categoriesData.data;
        }catch(e){
            console.error('Error deleting category:', e);
            throw new Error(`Status Code ${e}`);
        };
    }

}