import axios from "axios";

const API_URL = "http://localhost:3000/";


export const  getProducts = async () => {
    try{
        const response = await axios.get(API_URL);
        
        return response.data;

    }catch(error){
        console.error('Error fetching products: ' , error);
        throw error;
    }
};
export const getDetailedProduct = async (productID) =>{
    try {
        const response = await axios.get(`${API_URL}products/details/${productID}`);
        return response.data;
    } catch (error) {
        console.error('Error getting detailed product: ' , error);
    }
};
export const getProductbyCategory = async (Category) =>{
    try {
        const response = await axios.get(API_URL+`products/${Category}`);

        return response.data;

    } catch (error) {
        console.error('Error fetch products by category:',error);
        throw error;
    }
};