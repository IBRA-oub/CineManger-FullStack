import axios from "axios";

const API_URL = 'http://localhost:3000/api/reservation/allReservation';
const token = localStorage.getItem('token');

export const getAllResrvation = async (id) => {
    try {
        const response = await axios.get(API_URL,{
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching resrvation:', error);
        throw error;
    }
};