import mongoose from "mongoose";

class RatingModel {
    constructor() {
        const ratingSchema = new mongoose.Schema({
            rate: {
                type: Number,
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
                    required: [true, "Please add the room name"]
                },
                email: {
                    type: String,
                    required: [true, "Please specify the room type"]
                }
            }
        },
            {
                timestamps: true,
            });

        this.Rating = mongoose.model("Rating", ratingSchema);
    }
}

export default new RatingModel();
