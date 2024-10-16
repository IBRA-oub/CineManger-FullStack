import axios from "axios";

const API_URL = 'http://localhost:3000/api/comment/all-movie-with-some-genre';
const token = localStorage.getItem('token');

export const getAllFilmWithSomeGenreApi = async (filmData) => {
    try {
        const response = await axios.get(API_URL +`/${filmData}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching film with genre:', error);
        throw error;
    }
};