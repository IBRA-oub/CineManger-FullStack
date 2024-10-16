import RatingRepository from "../repository/Implementation/Rating.implementation.js";
class RatingService {
    constructor() {
        this.RatingRepository = new RatingRepository()
    }

    async getAllRating(filmId) {
        return this.RatingRepository.getAllRating(filmId)
    }
    async createRating(userId, filmId, rate) {
        return this.RatingRepository.createRating(userId, filmId, rate)
    }
    async getRateByUser(userEmail,filmId) {
        return this.RatingRepository.getRateByUser(userEmail,filmId)
    }
  
}

export default RatingService;