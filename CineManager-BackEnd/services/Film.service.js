import FilmRepository from "../repository/Implementation/Film.implementation.js";
class FilmService {
    constructor() {
        this.FilmRepository = new FilmRepository()
    }

    async getAllFilm(baseURL) {
        return this.FilmRepository.getAllFilm(baseURL)
    }
    async createFilm(filmData,file) {
        return this.FilmRepository.createFilm(filmData,file)
    }
    async getFilm(baseURL, id) {
        return this.FilmRepository.getFilm(baseURL, id)
    }
    async updateFilm(id,filmData) {
        return this.FilmRepository.updateFilm(id,filmData)
    }
    async deleteFilm(id) {
        return this.FilmRepository.deleteFilm(req, res)
    }
}

export default FilmService;