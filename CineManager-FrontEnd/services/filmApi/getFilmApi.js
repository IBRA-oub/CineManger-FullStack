import axios from "axios";

const API_URL = 'http://localhost:3000/api/film/getFilm/';

export const getFilm = async (id) => {
    try {
        const response = await axios.get(API_URL + `${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching film:', error);
        throw error;
    }
};