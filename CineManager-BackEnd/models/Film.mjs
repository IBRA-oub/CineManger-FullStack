import mongoose from 'mongoose';

class FilmModel {

    constructor() {
        const filmsSchema = new mongoose.Schema({
            titre: {
                type: String,
                required: [true, "Please add the titre"]
            },
            description: {
                type: String,
                required: [true, "Please add the description"]
            },
            genre: {
                type: String,
                required: [true, "Please add the genre"],
            },
            duree: {
                type: Number,
                required: [true, "Please add duration"],
            },
            annee: {
                type: Date,
                required: [true, "Please add date of production"],
            },
            image: {
                type: String,
                required: true,
            },
            video: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        });

        this.Film = mongoose.model("Film", filmsSchema);
    }
}

export default new FilmModel();
