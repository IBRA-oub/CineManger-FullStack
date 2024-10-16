import CommentService from "../services/Comment.service.js";
import jwt from "jsonwebtoken";
class CommentController {
    constructor() {
        this.CommentService = new CommentService();
    }

    createComment = (req, res) => {
        const { comment, filmId } = req.body;
        // const filmId = req.params.id;


        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET);
        const userId = decoded.user.id;

        this.CommentService.createComment(userId, filmId, comment)
            .then((result) => {
                res.status(201).json(result);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };


    getAllComment = (req, res) => {
        const filmId = req.params.id
        this.CommentService.getAllComment(filmId)
            .then((comment) => {
                res.status(200).json(comment);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };
    getAllFilmWithSomeGenre = (req, res) => {
        const { genre } = req.params
        this.CommentService.getAllFilmWithSomeGenre(genre)
            .then((Allmovie) => {
                res.status(200).json(Allmovie);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };





}
export default new CommentController();