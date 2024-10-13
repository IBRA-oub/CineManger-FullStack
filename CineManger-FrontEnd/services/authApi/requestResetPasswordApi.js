import axios from 'axios';

export const requestRestPAssword = async (email)=>{

    const API_URL = "http://localhost:3000/api/user/requestResetPassword";
    try{

        const reponse =  await axios.post(API_URL,email);
        return reponse.data;

    }catch(error){

        throw error.reponse.data

    }
}