import axios from "axios";

const API_URL = 'http://localhost:3000/api/reservation/getReservation';

export const getCountReservationApi = async () => {
    try {
        const response = await axios.get(API_URL);
         
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};