
import RatingInterface from '../Interface/Rating.interface.js';
import FilmModel from "../../models/Film.mjs";
import UserModel from "../../models/User.mjs";
import RatingModel from "../../models/Rating.mjs";


class RatingRepository extends RatingInterface {

    getAllRating = async (filmId) => {
        return RatingModel.Rating.aggregate([
            {
                $match: { 'film._id': filmId }
            },
            {
                $group: {
                    _id: '$film._id',
                    averageRate: { $avg: '$rate' }
                }
            }
        ])
            .then(result => {
                if (result.length === 0) {
                    return 0;
                }
                return result[0];
            })
            .catch(error => {
                throw new Error(error.message);
            });
    };

    createRating = async (userId, filmId, rate) => {
        console.log(rate, filmId);

        return UserModel.User.findById(userId)
            .then(user => {
                if (!user) {

                    throw new Error('User not found');
                }
                return FilmModel.Film.findById(filmId)
                    .then(film => {
                        if (!film) throw new Error("Film non trouvé");
                        return RatingModel.Rating.findOne({
                            "user.email": user.email,
                            "film._id": film._id
                        }).then((existingRating) => {
                            if (existingRating) {
                                existingRating.rate = rate;
                                existingRating.save();
                                console.log('Évaluation mise à jour');
                            } else {

                                return RatingModel.Rating.create({
                                    rate,
                                    film: {
                                        _id: film._id,
                                        titre: film.titre,
                                        genre: film.genre,
                                        duree: film.duree,
                                        annee: film.annee,
                                        image: film.image,
                                        video: film.video,
                                    },
                                    user: {
                                        nom: user.nom,
                                        email: user.email
                                    }

                                });

                            }
                        })

                    });
            });
    };

    getRateByUser = async (userEmail, filmId) => {
        console.log(userEmail);
        console.log(filmId);

        return RatingModel.Rating.find({ 'user.email': userEmail, 'film._id': filmId })
            .then(ratings => {


                if (ratings.length === 0) {

                    return 0;

                }
                return ratings[0].rate;
            })
            .catch(error => {
                throw new Error(error.message);
            });
    };

}

export default RatingRepository;