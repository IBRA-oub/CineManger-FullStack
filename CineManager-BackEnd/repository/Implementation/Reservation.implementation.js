import asyncHandler from "express-async-handler";
import ReservationModel from "../../models/Reservation.mjs";
import SeanceModel from "../../models/Seance.mjs";
import UserModel from "../../models/User.mjs";
import ReservationInterface from "../Interface/Reservation.interface.js";
import sendMail from "../../email.js";
import jwt from "jsonwebtoken";



class ReservationRepository extends ReservationInterface {


    createReservation = async (userId, seanceId, places_reservees) => {
        return UserModel.User.findById(userId)
            .then(user => {
                if (!user) throw new Error('User not found');

                return SeanceModel.Seance.findById(seanceId)
                    .then(seance => {
                        if (!seance) throw new Error('Séance introuvable.');

                        let toutesPlacesDisponibles = true;
                        places_reservees.forEach((place) => {
                            const placeInSeance = seance.places.find(p => p.numero === place.numero);
                            if (!placeInSeance || !placeInSeance.disponible) {
                                toutesPlacesDisponibles = false;
                            }
                        });

                        if (!toutesPlacesDisponibles) throw new Error('Une ou plusieurs places ne sont pas disponibles.');

                        // Mise à jour des places disponibles
                        seance.places = seance.places.map((place) => {
                            if (places_reservees.find(p => p.numero === place.numero)) {
                                return { ...place, disponible: false };
                            }
                            return place;
                        });

                        return seance.save()
                            .then(() => {
                                return sendMail(
                                    user.email,
                                    'Confirmation de Réservation',
                                    `Votre réservation pour la séance "${seance.description}" a été confirmée. Places réservées : ${places_reservees.map(p => p.numero).join(', ')}.`
                                ).catch(emailError => {
                                    console.error("Erreur lors de l'envoi de l'e-mail:", emailError.message);
                                });
                            })
                            .then(() => {
                                return ReservationModel.Reservation.create({
                                    user: userId,
                                    seance: seanceId,
                                    places_reservees,
                                    status: 'confirmed'
                                });
                            })
                            .then(nouvelleReservation => {
                                return { success: true, message: 'Réservation effectuée avec succès.', reservation: nouvelleReservation };
                            });
                    });
            })
            .catch(error => {
                console.error('Erreur lors de la création de la réservation:', error.message);
                throw error;
            });
    }

    getAllReservation = async (userId) => {
        return ReservationModel.Reservation.find({ user: userId })
            .populate('seance')
            .then(reservations => {
                if (!reservations || reservations.length === 0) {
                    throw new Error('No reservations found for this user');
                }
                return reservations;
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des réservations:', error.message);
                throw error;
            });
    }

    getReservation = async (userId, reservationId) => {
        return ReservationModel.Reservation.findById(reservationId)
            .populate('seance')
            .then(reservation => {
                if (!reservation) throw new Error('Reservation not found');
                if (reservation.user.toString() !== userId) {
                    throw new Error('Access denied, this reservation does not belong to you');
                }
                return reservation;
            })
            .catch(error => {
                console.error('Erreur lors de la récupération de la réservation:', error.message);
                throw error;
            });
    }

    deleteReservation = async (reservationId) => {
        return ReservationModel.Reservation.findById(reservationId)
            .then(reservation => {
                if (!reservation) throw new Error('Réservation introuvable');

                return SeanceModel.Seance.findById(reservation.seance)
                    .then(seance => {
                        if (!seance) throw new Error('Séance introuvable');

                        reservation.places_reservees.forEach((placeReservee) => {
                            seance.places = seance.places.map((place) => {
                                if (place.numero === placeReservee.numero) {
                                    return { ...place, disponible: true };
                                }
                                return place;
                            });
                        });

                        return seance.save().then(() => {
                            return ReservationModel.Reservation.deleteOne({ _id: reservation._id });
                        });
                    });
            })
            .then(() => {
                return { message: "Réservation supprimée et places rendues disponibles avec succès" };
            })
            .catch(error => {
                console.error('Erreur lors de la suppression de la réservation:', error.message);
                throw error;
            });
    }

}

export default ReservationRepository;
