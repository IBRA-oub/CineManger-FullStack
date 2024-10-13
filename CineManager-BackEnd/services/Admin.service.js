import AdminRepository from "../repository/Implementation/Admin.implementation.js";
class AdminService  {
    constructor() {
        this.AdminRepository = new AdminRepository()
    }
 
    async getAllAdmin() {
        return this.AdminRepository.getAllAdmin()
    }
    async createAdmin(nom, email, password) {
        return this.AdminRepository.createAdmin(nom, email, password)
    }
    async getAdmin(id) {
        return this.AdminRepository.getAdmin(id)
    }
    async updateAdmin(id, data) {
        return this.AdminRepository.updateAdmin(id, data)
    }
    async deleteAdmin(id) {
        return this.AdminRepository.deleteAdmin(id)
    }
}    

export default AdminService;