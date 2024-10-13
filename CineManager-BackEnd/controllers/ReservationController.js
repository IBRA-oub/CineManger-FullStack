import ReservationService from "../services/Reservation.service.js";
import jwt from "jsonwebtoken";
class ReservationController {
    constructor() {
        this.ReservationService = new ReservationService();
    }

    createReservation = (req, res) => {
        const { seanceId, places_reservees } = req.body;

        // Extraire le token d'authentification et décoder l'userId
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET);
        const userId = decoded.user.id;

        // Appel du service pour créer la réservation
        this.ReservationService.createReservation(userId, seanceId, places_reservees)
            .then((result) => {
                res.status(201).json(result);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };

    // Obtenir toutes les réservations d'un utilisateur
    getAllReservation = (req, res) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET);
        const userId = decoded.user.id;

        this.ReservationService.getAllReservation(userId)
            .then((reservations) => {
                res.status(200).json(reservations);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };

    // Obtenir une réservation spécifique
    getReservation = (req, res) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET);
        const userId = decoded.user.id;

        const reservationId = req.params.id;

        this.ReservationService.getReservation(userId, reservationId)
            .then((reservation) => {
                res.status(200).json(reservation);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };

    // Supprimer une réservation
    deleteReservation = (req, res) => {
        const reservationId = req.params.id;

        this.ReservationService.deleteReservation(reservationId)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };
}
export default new ReservationController();