import SeanceRepository from "../repository/Implementation/Seance.implementation.js";
class SeanceService {
    constructor() {
        this.SeanceRepository = new SeanceRepository()
    }

    async getAllSeance() {
        return this.SeanceRepository.getAllSeance()
    }
    async createSeance({ date_heure, tarif, location, filmId, salleId }) {
        return this.SeanceRepository.createSeance({ date_heure, tarif, location, filmId, salleId })
    }
    async getSeance(id) {
        return this.SeanceRepository.getSeance(id)
    }
    async updateSeance(id, updateData) {
        return this.SeanceRepository.updateSeance(id, updateData)
    }
    async deleteSeance(id) {
        return this.SeanceRepository.deleteSeance(id)
    }
    async getSeancesByFilm(id) {
        return this.SeanceRepository.getSeancesByFilm(id)
    }
}

export default SeanceService;