import mongoose from "mongoose";

class ReservationModel {
    constructor() {

        const reservationSchema = new mongoose.Schema({
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            seance: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Seance',
                required: [true, "please add name of this salle"]
            },
            places_reservees: [
                {
                    numero: Number,

                }
            ],
            status: {
                type: String,
                default: 'pending',
                required: [true, "please add name of this salle"]
            }
        });


        this.Reservation = mongoose.model("Reservation", reservationSchema);
    }
}




export default new ReservationModel();
