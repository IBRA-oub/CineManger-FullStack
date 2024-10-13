class FilmInterface{

    constructor(){
        if(new.target === FilmInterface){
            throw new Error('It is an abstract class can not be instancited');
        }

    }

    async getAllFilm(baseURL){
        throw new Error('Must be Implemented!!');
    }
    
    async createFilm(filmData,file){
        throw new Error('Must be Implemented!!');
    }
    async getFilm(baseURL, id){
        throw new Error('Must be Implemented!!');
    }
    async updateFilm(id,filmData){
        throw new Error('Must be Implemented!!');
    }
    async deleteFilm(id){
        throw new Error('Must be Implemented!!');
    }
   

}
export default FilmInterface;