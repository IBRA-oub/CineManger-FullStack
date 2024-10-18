class SeanceInterface{

    constructor(){
        if(new.target === SeanceInterface){
            throw new Error('It is an abstract class can not be instancited');
        }

    }

    async getAllSeance(){
        throw new Error('Must be Implemented!!');
    }
    
    async createSeance({ date_heure, tarif, location, filmId, salleId }){
        throw new Error('Must be Implemented!!');
    }
    async getSeance(id){
        throw new Error('Must be Implemented!!');
    }
    async getSumSeance(){
        throw new Error('Must be Implemented!!');
    }
    async updateSeance(id, updateData){
        throw new Error('Must be Implemented!!');
    }
    async deleteSeance(id){
        throw new Error('Must be Implemented!!');
    }
    async getSeancesByFilm(id){
        throw new Error('Must be Implemented!!');
    }
   

}
export default SeanceInterface;