import axios from "axios";

const API_URL = 'http://localhost:3000/api/comment/all-comment/';

export const getAllComment = async (id) => {
    try {
      
        
        const response = await axios.get(API_URL + `${id}`);
        
        return response.data;
    } catch (error) {
        console.error('Error fetching comment:', error);
        throw error;
    }
};