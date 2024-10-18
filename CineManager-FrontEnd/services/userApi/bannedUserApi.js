import axios from "axios";

const API_URL = 'http://localhost:3000/api/user/banned/';

export const toggleBanStatus = async (userId) => {

    try { 
        const response = await axios.put(API_URL+ `${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching resrvation:', error);
        throw error;
    }
};