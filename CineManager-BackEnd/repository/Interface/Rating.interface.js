class RatingInterface{

    constructor(){
        if(new.target === RatingInterface){
            throw new Error('It is an abstract class can not be instancited');
        }

    }

    async getAllRating(filmId){
        throw new Error('Must be Implemented!!');
    }
    
    async createRating(userId, filmId, rate){
        throw new Error('Must be Implemented!!');
    }
    async getRateByUser(userEmail,filmId){
        throw new Error('Must be Implemented!!');
    }
  
   

}
export default RatingInterface;