import axios from "axios";

const API_URL = 'http://localhost:3000/api/rating/all-rate/';

export const getAllRate = async (id) => {
    try {
        const response = await axios.get(API_URL + `${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching rate:', error);
        throw error;
    }
};