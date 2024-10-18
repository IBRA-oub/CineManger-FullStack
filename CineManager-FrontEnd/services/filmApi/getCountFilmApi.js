import axios from "axios";

const API_URL = 'http://localhost:3000/api/film/getSumFilm';

export const getCountFilmApi = async () => {
    try {
        const response = await axios.get(API_URL);
         
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};  