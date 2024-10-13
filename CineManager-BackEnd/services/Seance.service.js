import SeanceRepository from "../repository/Implementation/Seance.implementation.js";
class SeanceService {
    constructor() {
        this.SeanceRepository = new SeanceRepository()
    }

    async getAllSeance(baseUrl) {
        return this.SeanceRepository.getAllSeance(baseUrl)
    }
    async createSeance({ date_heure, tarif, location, filmId, salleId }) {
        return this.SeanceRepository.createSeance({ date_heure, tarif, location, filmId, salleId })
    }
    async getSeance(id, baseUrl) {
        return this.SeanceRepository.getSeance(id, baseUrl)
    }
    async updateSeance(id, updateData) {
        return this.SeanceRepository.updateSeance(id, updateData)
    }
    async deleteSeance(id) {
        return this.SeanceRepository.deleteSeance(id)
    }
    async getSeancesByFilm(id, baseUrl) {
        return this.SeanceRepository.getSeancesByFilm(id, baseUrl)
    }
}

export default SeanceService;