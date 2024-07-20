import axios from "axios";

const API_URL = "http://localhost:3000/categories";

export const getProductsByCategory = async (categoryName) => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${categoryName}`);
      return response.data;
    } catch (e) {
      console.error('Error fetching products: ', e);
      throw e;
    }
}
export const  getCategories = async () => {
    try{
        const response = await axios.get(API_URL);
        
        return response.data;

    }catch(e){
        console.error('Error fetching categories: ' , e);
        throw e;
    }
};
