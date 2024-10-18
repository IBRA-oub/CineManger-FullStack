import ReservationRepository from "../repository/Implementation/Reservation.implementation.js";
class ReservationService  {
    constructor() {
        this.ReservationRepository = new ReservationRepository()
    }
 
    async getAllReservation(userId) {
        return this.ReservationRepository.getAllReservation(userId)
    }
    async createReservation(userId, seanceId, places_reservees) {
        return this.ReservationRepository.createReservation(userId, seanceId, places_reservees)
    }
    async getReservation(userId, reservationId) {
        return this.ReservationRepository.getReservation(userId, reservationId)
    }
    async getSumReservation() {
        return this.ReservationRepository.getSumReservation()
    }
    
    async deleteReservation(reservationId) {
        return this.ReservationRepository.deleteReservation(reservationId)
    }
}

export default ReservationService;