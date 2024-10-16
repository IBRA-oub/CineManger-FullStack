class CommentInterface{

    constructor(){
        if(new.target === CommentInterface){
            throw new Error('It is an abstract class can not be instancited');
        }

    }

    async getAllComment(filmId){
        throw new Error('Must be Implemented!!');
    }
    
    async createComment(userId, filmId, comment){
        throw new Error('Must be Implemented!!');
    }
    async 
    async getAllFilmWithSomeGenre(genre){
        throw new Error('Must be Implemented!!');
    }
   
  
   

}
export default CommentInterface;