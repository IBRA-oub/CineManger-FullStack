import axios from "axios";

const API_URL = 'http://localhost:3000/api/user/updateUser';
const token = localStorage.getItem('token');

export const updateUserInfo = async (formData) => {
    
    try {

        const response = await axios.put(API_URL,formData,{
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching resrvation:', error);
        throw error;
    }
};