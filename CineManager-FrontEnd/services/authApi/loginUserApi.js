import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 

export const loginUserApi = async (usrData) => {
    const API_URL = "http://localhost:3000/api/user/login";
    
    try {
        const response = await axios.post(API_URL, usrData);
  
        const { accessToken } = response.data;
        console.log(accessToken)

        const decodedToken = jwtDecode(accessToken);
     
        localStorage.setItem('user', JSON.stringify(decodedToken.user));
        localStorage.setItem('token', accessToken);
        
        return decodedToken.user; 

    } catch (error) {
 
            throw error.response.data; 
       
    }
};
