import axios from 'axios';

export const registerUserApi = async (usrData)=>{

    const API_URL = "http://localhost:3000/api/user/register";
    try{

        const reponse =  await axios.post(API_URL,usrData);
        return reponse.data;

    }catch(error){

        throw error.reponse.data

    }
}