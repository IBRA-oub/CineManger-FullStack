import mongoose from "mongoose";

class SalleModel{
    constructor(){
        const sallesSchema = new mongoose.Schema({
            nom:{
                type:String,
                require:[true,"please add name of this salle"]
            },
            places: {
                type: Number,
                required: [true, "Please specify the number of places"],
                min: [1, "Number of places must be at least 1"]
            },
            type: {
                type: String,
                enum: ['standard', 'VIP', 'IMAX'], 
                required: [true, "Please specify the type of salle"]
            }
            
        })

        this.Salle = mongoose.model("Salle", sallesSchema);
    }
}

export default new SalleModel();