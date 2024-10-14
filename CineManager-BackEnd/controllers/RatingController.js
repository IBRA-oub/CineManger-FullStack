import RatingService from "../services/Rating.service.js";
import jwt from "jsonwebtoken";
class RatingController {
    constructor() {
        this.RatingService = new RatingService();
    }

    createRating = (req, res) => {
        const {rate}  = req.body;
        const filmId = req.params.id;

        // Extraire le token d'authentification et décoder l'userId
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET);
        const userId = decoded.user.id;
        
        

        // Appel du service pour créer la réservation
        this.RatingService.createRating(userId, filmId, rate)
            .then((result) => {
                res.status(201).json({message:"youe rate is sauvegard",result});
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };

  
    getAllRating = (req, res) => {
    const filmId = req.params.id
        this.RatingService.getAllRating(filmId)
            .then((rating) => {
                res.status(200).json(rating);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };

    getRateByUser = (req, res) => {
        const filmId  = req.params.id;
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET);
        const userEmail = decoded.user.email;
        


        this.RatingService.getRateByUser(userEmail,filmId)
            .then((rate) => {
                res.status(200).json(rate);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };

    // // Supprimer une réservation
    // deleteReservation = (req, res) => {
    //     const reservationId = req.params.id;

    //     this.ReservationService.deleteReservation(reservationId)
    //         .then((result) => {
    //             res.status(200).json(result);
    //         })
    //         .catch((error) => {
    //             res.status(500).json({ message: error.message });
    //         });
    // };
}
export default new RatingController();