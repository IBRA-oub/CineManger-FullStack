class FilmInterface{

    constructor(){
        if(new.target === FilmInterface){
            throw new Error('It is an abstract class can not be instancited');
        }

    }

    async getAllFilm(){
        throw new Error('Must be Implemented!!');
    }
    
    async createFilm(filmData,file){
        throw new Error('Must be Implemented!!');
    }
    async getFilm(id){
        throw new Error('Must be Implemented!!');
    }
    async getSumFilm(){
        throw new Error('Must be Implemented!!');
    }
    async updateFilm(id, filmData,file){
        throw new Error('Must be Implemented!!');
    }
    async deleteFilm(id){
        throw new Error('Must be Implemented!!');
    }
   

}
export default FilmInterface;