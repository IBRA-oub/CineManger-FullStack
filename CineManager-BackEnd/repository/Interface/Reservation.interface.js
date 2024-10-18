class ReservationInterface{

    constructor(){
        if(new.target === ReservationInterface){
            throw new Error('It is an abstract class can not be instancited');
        }

    }

    async getAllReservation(userId){
        throw new Error('Must be Implemented!!');
    }
    
    async createReservation(userId, seanceId, places_reservees){
        throw new Error('Must be Implemented!!');
    }
   
    async getReservation(userId, reservationId){
        throw new Error('Must be Implemented!!');
    }
    async getSumReservation(){
        throw new Error('Must be Implemented!!');
    }
    async deleteReservation(rreservationId){
        throw new Error('Must be Implemented!!');
    }

}
export default ReservationInterface;