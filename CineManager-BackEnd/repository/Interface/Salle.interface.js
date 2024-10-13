class SalleInterface {
    constructor() {
        if (new.target === SalleInterface) {
            throw new Error('It is an abstract class can not be instancited');
        }

    }
    async getAllSalle() {
        throw new Error('Must be Implemented!!');
    }

    async createSalle({ nom, places, type }) {
        throw new Error('Must be Implemented!!');
    }
    async getSalle(id) {
        throw new Error('Must be Implemented!!');
    }
    async updateSalle(id, updateData) {
        throw new Error('Must be Implemented!!');
    }
    async deleteSalle(id) {
        throw new Error('Must be Implemented!!');
    }

}
export default SalleInterface;