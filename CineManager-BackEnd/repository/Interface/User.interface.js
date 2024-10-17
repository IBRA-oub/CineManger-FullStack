class UserInterface{

    constructor(){
        if(new.target === UserInterface){
            throw new Error('It is an abstract class can not be instancited');
        }

    }

    async create(nom, email, password){
        throw new Error('Must be Implemented!!');
    }
    async loginUser(email, password){
        throw new Error('Must be Implemented!!');
    }
    async currentUser(userId){
        throw new Error('Must be Implemented!!');
    }
    async updateUser(userId, userData, file){
        throw new Error('Must be Implemented!!');
    }
    async requestPasswordReset(email){
        throw new Error('Must be Implemented!!');
    }
    async resetPassword(token, password){
        throw new Error('Must be Implemented!!');
    }
   

}
export default UserInterface;