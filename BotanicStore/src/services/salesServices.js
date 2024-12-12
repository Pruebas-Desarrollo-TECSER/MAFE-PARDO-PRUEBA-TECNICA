import axios from "axios";

export class SalesService{
    constructor(){
        this.baseUrl = 'http://127.0.0.1:8000/api/';
    }

    async getSales(){
        try{
            const salesData = await axios.get(`${this.baseUrl}sales/?format=json`);
            return salesData.data;
        }catch(e){
            console.error('Error fetching sales:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async getSalesById(id){
        console.log('sale id', id);
        try{
            const salesData = await axios.get(`${this.baseUrl}sales/${id}/?format=json`);
            return salesData.data;
        }catch(e){
            console.error('Error fetching sale by id:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async addSales(sale){
        console.log('Product being sent:', sale);
        try{
            const salesData = await axios.post(`${this.baseUrl}sales/`, sale,
                {
                    headers: {
                    'Content-Type': 'application/json', 
                    }
                }
            );
            return salesData.data;
        }catch(e){
            console.error('Error adding sale:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async updateSales(id, updatedProduct){
        try{
            const salesData = await axios.put(`${this.baseUrl}sales/${id}/`, updatedProduct,
                {
                    headers: {
                    'Content-Type': 'application/json', 
                    }
                }
            );
            return salesData.data;
        }catch(e){
            console.error('Error updating sale:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async deleteSales({id}){
        try{
            const salesData = await axios.delete(`${this.baseUrl}sales/${id}/ `);
            return salesData.data;
        }catch(e){
            console.error('Error deleting sale:', e);
            throw new Error(`Status Code ${e}`);
        };
    }

}