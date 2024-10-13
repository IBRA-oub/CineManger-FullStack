import SalleRepository from "../repository/Implementation/Salle.implementation.js";
class SalleService {
    constructor() {
        this.SalleRepository = new SalleRepository()
    }

    async getAllSalle() {
        return this.SalleRepository.getAllSalle()
    }
    async createSalle({ nom, places, type }) {
        return this.SalleRepository.createSalle({ nom, places, type })
    }
    async getSalle(id) {
        return this.SalleRepository.getSalle(id)
    }
    async updateSalle(id, updateData) {
        return this.SalleRepository.updateSalle(id, updateData)
    }
    async deleteSalle(id) {
        return this.SalleRepository.deleteSalle(id)
    }
}

export default SalleService;