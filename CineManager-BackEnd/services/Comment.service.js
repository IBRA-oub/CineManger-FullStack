import CommentRepository from "../repository/Implementation/Comment.implementation.js";
class CommentService {
    constructor() {
        this.CommentRepository = new CommentRepository()
    }

    async getAllComment(filmId) {
        return this.CommentRepository.getAllComment(filmId)
    }
    async createComment(userId, filmId, comment) {
        return this.CommentRepository.createComment(userId, filmId, comment)
    }
  
}

export default CommentService;