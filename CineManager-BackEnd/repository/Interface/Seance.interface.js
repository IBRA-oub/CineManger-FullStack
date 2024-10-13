class SeanceInterface{

    constructor(){
        if(new.target === SeanceInterface){
            throw new Error('It is an abstract class can not be instancited');
        }

    }

    async getAllSeance(baseUrl){
        throw new Error('Must be Implemented!!');
    }
    
    async createSeance({ date_heure, tarif, location, filmId, salleId }){
        throw new Error('Must be Implemented!!');
    }
    async getSeance(id, baseUrl){
        throw new Error('Must be Implemented!!');
    }
    async updateSeance(id, updateData){
        throw new Error('Must be Implemented!!');
    }
    async deleteSeance(id){
        throw new Error('Must be Implemented!!');
    }
    async getSeancesByFilm(id, baseUrl){
        throw new Error('Must be Implemented!!');
    }
   

}
export default SeanceInterface;