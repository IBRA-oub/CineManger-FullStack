import SeanceService from "../services/Seance.service.js";
class SeanceController {
    constructor() {
        this.SeanceService = new SeanceService();
    }

    getAllSeance = async (req, res) => {
        const baseUrl = `${req.protocol}://${req.get('host')}/uploads/`;
        this.SeanceService.getAllSeance(baseUrl)
            .then(seances => res.status(200).json(seances))
            .catch(err => res.status(500).json({ message: err.message }));
    };

    createSeance = async (req, res) => {
        const { date_heure, tarif, location, filmId, salleId } = req.body;
        this.SeanceService.createSeance({ date_heure, tarif, location, filmId, salleId })
            .then(seance => res.status(201).json(seance))
            .catch(err => res.status(500).json({ message: err.message }));
    };

    getSeance = async (req, res) => {
        const { id } = req.params;
        // const baseUrl = `${req.protocol}://${req.get('host')}/uploads/`;
        this.SeanceService.getSeance(id)
            .then(seance => res.status(200).json(seance))
            .catch(err => res.status(500).json({ message: err.message }));
    };

    updateSeance = async (req, res) => {
        const { id } = req.params;
        const updateData = req.body;
        this.SeanceService.updateSeance(id, updateData)
            .then(updatedSeance => res.status(200).json(updatedSeance))
            .catch(err => res.status(500).json({ message: err.message }));
    };

    deleteSeance = async (req, res) => {
        const { id } = req.params;
        this.SeanceService.deleteSeance(id)
            .then(() => res.status(200).json({ message: "Séance supprimée avec succès" }))
            .catch(err => res.status(500).json({ message: err.message }));
    };

    getSeancesByFilm = async (req, res) => {
        const { id } = req.params;

        this.SeanceService.getSeancesByFilm(id)
            .then(seances => res.status(200).json(seances))
            .catch(err => res.status(500).json({ message: err.message }));
    };
}
export default new SeanceController();