import SalleInterface from '../Interface/Salle.interface.js';
import SalleModel from "../../models/Salle.mjs";
import asyncHandler from "express-async-handler";

class SalleRepository extends SalleInterface {
    getAllSalle = async() => {
        return SalleModel.Salle.find()
            .then(salles => salles)
            .catch(err => {
                throw new Error(err.message);
            });
    };

    createSalle = async({ nom, places, type }) => {
        if (!nom || !places || !type) {
            throw new Error("All fields are required");
        }

        return SalleModel.Salle.create({ nom, places, type })
            .then(salle => salle)
            .catch(err => {
                throw new Error(err.message);
            });
    };

    getSalle = async(id) => {
        return SalleModel.Salle.findById(id)
            .then(salle => {
                if (!salle) {
                    throw new Error("Salle not found");
                }
                return salle;
            })
            .catch(err => {
                throw new Error(err.message);
            });
    };

    updateSalle = async(id, updateData) => {
        return SalleModel.Salle.findById(id)
            .then(salle => {
                if (!salle) {
                    throw new Error("Salle not found");
                }
                return SalleModel.Salle.findByIdAndUpdate(id, updateData, { new: true });
            })
            .then(updatedSalle => updatedSalle)
            .catch(err => {
                throw new Error(err.message);
            });
    };

    deleteSalle = async(id) => {
        return SalleModel.Salle.findById(id)
            .then(salle => {
                if (!salle) {
                    throw new Error("Salle not found");
                }
                return SalleModel.Salle.deleteOne(salle);
            })
            .then(() => ({ message: "Salle deleted successfully" }))
            .catch(err => {
                throw new Error(err.message);
            });
    };
}

export default SalleRepository