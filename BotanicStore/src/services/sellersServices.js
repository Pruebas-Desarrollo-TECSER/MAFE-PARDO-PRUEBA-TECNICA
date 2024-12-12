import axios from "axios";

export class SellersService{
    constructor(){
        this.baseUrl = 'http://127.0.0.1:8000/api/';
    }

    async getSellers(){
        try{
            const sellersData = await axios.get(`${this.baseUrl}sellers/?format=json`);
            return sellersData.data;
        }catch(e){
            console.error('Error fetching sellers:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async getSellersById(id){
        console.log('seller id', id);
        try{
            const sellersData = await axios.get(`${this.baseUrl}sellers/${id}/?format=json`);
            return sellersData.data;
        }catch(e){
            console.error('Error fetching seller by id:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async addSellers(seller){
        console.log('Product being sent:', seller);
        try{
            const sellersData = await axios.post(`${this.baseUrl}sellers/`, seller,
                {
                    headers: {
                    'Content-Type': 'application/json', 
                    }
                }
            );
            return sellersData.data;
        }catch(e){
            console.error('Error adding seller:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async updateSellers(id, updatedProduct){
        try{
            const sellersData = await axios.put(`${this.baseUrl}sellers/${id}/`, updatedProduct,
                {
                    headers: {
                    'Content-Type': 'application/json', 
                    }
                }
            );
            return sellersData.data;
        }catch(e){
            console.error('Error updating seller:', e);
            throw new Error(`Status Code ${e}`);
        };
    }
    async deleteSellers({id}){
        try{
            const sellersData = await axios.delete(`${this.baseUrl}sellers/${id}/ `);
            return sellersData.data;
        }catch(e){
            console.error('Error deleting seller:', e);
            throw new Error(`Status Code ${e}`);
        };
    }

}