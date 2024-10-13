import axios from 'axios';

const API_URL = 'http://localhost:3000/api/seance/allSeance';

export const getAllSession = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; 
    } catch (error) {
        console.error('Error fetching session:', error);
        throw error; 
    }
};