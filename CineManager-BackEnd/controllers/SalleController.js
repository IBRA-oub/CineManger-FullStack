import SalleService from "../services/Salle.service.js";
class SalleController {
    constructor() {
        this.SalleService = new SalleService();
    }

    getAllSalle = async (req, res) => {
        this.SalleService.getAllSalle()
            .then(salles => res.status(200).json(salles))
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    };

    createSalle = async (req, res) => {
        const { nom, places, type } = req.body;
        this.SalleService.createSalle({ nom, places, type })
            .then(salle => res.status(201).json(salle))
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    };

    getSalle = async (req, res) => {
        const { id } = req.params;
        this.SalleService.getSalle(id)
            .then(salle => res.status(200).json(salle))
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    };

    updateSalle = async (req, res) => {
        const { id } = req.params;
        const updateData = req.body;
        this.SalleService.updateSalle(id, updateData)
            .then(updatedSalle => res.status(200).json(updatedSalle))
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    };

    deleteSalle = async (req, res) => {
        const { id } = req.params;
        this.SalleService.deleteSalle(id)
            .then(response => res.status(200).json(response))
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    };
}
export default new SalleController();