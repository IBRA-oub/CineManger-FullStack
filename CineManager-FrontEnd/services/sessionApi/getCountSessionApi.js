import axios from "axios";

const API_URL = 'http://localhost:3000/api/seance/getSumSeance';

export const getCountSeanceApi = async () => {
    try {
        const response = await axios.get(API_URL);
         
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};