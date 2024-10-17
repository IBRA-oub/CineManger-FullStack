import axios from "axios";

const API_URL = 'http://localhost:3000/api/user/current';
const token = localStorage.getItem('token');

export const getUserInfo = async () => {
    try {
        const response = await axios.get(API_URL,{
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        });
         
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};