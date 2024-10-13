import SeanceInterface from '../Interface/Seance.interface.js';
import FilmModel from "../../models/Film.mjs";
import SeanceModel from "../../models/Seance.mjs";
import SalleModel from "../../models/Salle.mjs";
import asyncHandler from "express-async-handler";

class SeanceRepository extends SeanceInterface {

    getAllSeance = async(baseUrl) => {
        return SeanceModel.Seance.find()
            .then(seances => {
                
                const fixImageSeances = seances.map(seance => ({
                    ...seance._doc,
                    film: {
                        ...seance.film,
                        image: `${baseUrl}${encodeURIComponent(seance.film.image)}`
                    }
                }));
                return fixImageSeances;
            });
    };

    createSeance = async({ date_heure, tarif, location, filmId, salleId }) => {
        return SalleModel.Salle.findById(salleId)
            .then(salle => {
                if (!salle) throw new Error("Salle non trouvée");
                return FilmModel.Film.findById(filmId).then(film => {
                    if (!film) throw new Error("Film non trouvé");

                    const places = Array.from({ length: salle.places }, (_, i) => ({
                        numero: i + 1,
                        disponible: true,
                    }));

                    return SeanceModel.Seance.create({
                        date_heure,
                        tarif,
                        location,
                        film: {
                            _id: film._id,
                            titre: film.titre,
                            genre: film.genre,
                            duree: film.duree,
                            annee: film.annee,
                            image: film.image,
                        },
                        salle: {
                            nom: salle.nom,
                            type: salle.type,
                            places_totales: salle.places,
                        },
                        places,
                    });
                });
            });
    };

    getSeance = async(id, baseUrl) => {
        return SeanceModel.Seance.findById(id)
            .then(seance => {
                if (!seance) throw new Error("Seance not found");

               
                return {
                    ...seance._doc,
                    film: {
                        ...seance.film,
                        image: `${baseUrl}${encodeURIComponent(seance.film.image)}`,
                    },
                };
            });
    };

    updateSeance = async(id, updateData) => {
        return SeanceModel.Seance.findById(id)
            .then(seance => {
                if (!seance) throw new Error("Séance non trouvée");

                if (updateData.filmId) {
                    return FilmModel.Film.findById(updateData.filmId)
                        .then(film => {
                            if (!film) throw new Error("Film non trouvé");
                            seance.film = {
                                _id: film._id,
                                titre: film.titre,
                                genre: film.genre,
                                duree: film.duree,
                                annee: film.annee,
                                image: film.image,
                            };
                        });
                }
                if (updateData.salleId) {
                    return SalleModel.Salle.findById(updateData.salleId)
                        .then(salle => {
                            if (!salle) throw new Error("Salle non trouvée");
                            seance.salle = {
                                nom: salle.nom,
                                type: salle.type,
                                places_totales: salle.places,
                            };
                            seance.places = Array.from({ length: salle.places }, (_, i) => ({
                                numero: i + 1,
                                disponible: true,
                            }));
                        });
                }

                Object.assign(seance, updateData);
                return seance.save();
            });
    };

    deleteSeance = async(id) => {
        return SeanceModel.Seance.findById(id)
            .then(seance => {
                if (!seance) throw new Error("Seance not found");
                return SeanceModel.Seance.deleteOne(seance);
            });
    };

    getSeancesByFilm = async(filmId, baseUrl) => {
        return SeanceModel.Seance.find({ 'film._id': filmId })
            .then(seances => {
               
                return seances.map(seance => ({
                    ...seance._doc,
                    film: {
                        ...seance.film,
                        image: `${baseUrl}${encodeURIComponent(seance.film.image)}`,
                    },
                }));
            });
    };


}

export default SeanceRepository;