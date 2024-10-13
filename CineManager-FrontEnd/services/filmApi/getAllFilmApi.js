
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/film/allFilm';

export const getAllFilms = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; 
    } catch (error) {
        console.error('Error fetching films:', error);
        throw error; 
    }
};
