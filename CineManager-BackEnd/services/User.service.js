import UserRepository from "../repository/Implementation/User.implementation.js";
class UserService {
    constructor() {
        this.UserRepository = new UserRepository()
    }
    async create(nom, email, password) {
        return this.UserRepository.create(nom, email, password)
    }
    async loginUser(email, password){
        return this.UserRepository.loginUser(email, password)
    }
    async currentUser(userId){
        return this.UserRepository.currentUser(userId)
    }
    async updateUser(userId, userData, file){
        return this.UserRepository.updateUser(userId, userData, file)
    }

    async requestPasswordReset(email){
        return this.UserRepository.requestPasswordReset(email)
    }
    async resetPassword(token, password){
        return this.UserRepository.resetPassword(token, password)
    }
}

export default UserService;