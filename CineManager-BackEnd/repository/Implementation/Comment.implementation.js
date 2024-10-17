
import CommentModel from "../../models/Comment.mjs";
import FilmModel from "../../models/Film.mjs";
import UserModel from "../../models/User.mjs";
import CommentInterface from "../Interface/Comment.interface.js";
class CommentRepository extends CommentInterface {

    getAllComment = async (filmId) => {

        return CommentModel.Comment.find({ "film._id": filmId })
    };

    createComment = async (userId, filmId, comment) => {
        console.log(userId, filmId, comment);

        return UserModel.User.findById(userId)
            .then(user => {
                if (!user) {

                    throw new Error('User not found');
                }
                return FilmModel.Film.findById(filmId)
                    .then(film => {
                        if (!film) throw new Error("Film non trouvé");
                        return CommentModel.Comment.create({
                            comment,
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
                                email: user.email,
                                image: user.image
                            }

                        });
                    })

            });

    };

    getAllFilmWithSomeGenre = async (genre) => {

        return FilmModel.Film.find({ "genre": genre })
    }
}

export default CommentRepository;