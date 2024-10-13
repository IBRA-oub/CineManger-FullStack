import FilmRepository from "../repository/Implementation/Film.implementation.js";
class FilmService {
    constructor() {
        this.FilmRepository = new FilmRepository()
    }

    async getAllFilm() {
        return this.FilmRepository.getAllFilm()
    }
    async createFilm(filmData,file) {
        return this.FilmRepository.createFilm(filmData,file)
    }
    async getFilm( id) {
        return this.FilmRepository.getFilm( id)
    }
    async updateFilm(id, filmData,file) {
        return this.FilmRepository.updateFilm(id, filmData,file)
    }
    async deleteFilm(id) {
        return this.FilmRepository.deleteFilm(req, res)
    }
}

export default FilmService;