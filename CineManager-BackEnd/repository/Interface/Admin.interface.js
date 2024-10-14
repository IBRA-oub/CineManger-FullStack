class AdminInterface {

    constructor() {
        if (new.target === AdminInterface) {
            throw new Error('It is an abstract class can not be instancited');
        }

    }

    async getAllAdmin() {
        throw new Error('Must be Implemented!!');
    }

    async createAdmin(nom, email, password) {
        throw new Error('Must be Implemented!!');
    }
    async getAdmin(id) {
        throw new Error('Must be Implemented!!');
    }
    async updateAdmin(id, data) {
        throw new Error('Must be Implemented!!');
    }
    async deleteAdmin(id) {
        throw new Error('Must be Implemented!!');
    }

}
export default AdminInterface;