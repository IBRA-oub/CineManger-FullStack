import mongoose from "mongoose";

class CommentModel {
    constructor() {
        const commentSchema = new mongoose.Schema({
            comment: {
                type: String,
                required: true
            },
            film: {
                _id: {
                    type: String,
                    required: true
                },
                titre: {
                    type: String,
                    required: [true, "Please add the film title"]
                },
                genre: {
                    type: String,
                    required: [true, "Please add the film genre"]
                },
                duree: {
                    type: Number,
                    required: [true, "Please add the film duration"]
                },
                annee: {
                    type: Date,
                    required: [true, "Please add the year of production"]
                },
                image: {
                    type: String,
                    required: true,
                },
                video: {
                    type: String,
                    required: true,
                }
            },
            user: {
                nom: {
                    type: String,
                    required: [true, "Please add the  name"]
                },
                email: {
                    type: String,
                    required: [true, "Please specify the email"]
                },
                image: {
                    type: String,
                    required: [true, "Please specify the image"]
                }
            }
        },
            {
                timestamps: true,
            });

        this.Comment = mongoose.model("Comment", commentSchema);
    }
}

export default new CommentModel();
