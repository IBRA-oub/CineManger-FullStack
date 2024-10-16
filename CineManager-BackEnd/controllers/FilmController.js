import upload from "../middleware/configMulter.js";
import FilmService from "../services/Film.service.js";

class FilmController {
    constructor() {
        this.FilmService = new FilmService();
    }

    getAllFilm = async (req, res) => {
       
        return this.FilmService.getAllFilm()
            .then(films => {

                return res.status(200).json(films);
            })
            .catch((err) => {
                return res.status(500).json({ message: err.message });
            })

    };

    createFilm = async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error uploading files: ' + err.message });
            }

            const filmData = req.body;
            const file = req.files;
            

            if (!file) {
                return res.status(400).json({ message: 'Image or video is required' });
            }

            if (!filmData.titre || !filmData.description || !filmData.genre || !filmData.duree || !filmData.annee) {
                res.status(400);
                throw new Error("All fields are required")
            }
            return this.FilmService.createFilm(filmData, file)
                .then((film) => {
                    

                    return res.status(200).json({ message: "movie created successfully", film: film });
                })

                .catch((err) => {
                    return res.status(500).json({ message: err.message });
                })
        })
    };
    getFilm = async (req, res) => {

        const id = req.params.id;
        await this.FilmService.getFilm(id)
            .then(film => {

                return res.status(200).json(film);
            })
            .catch((err) => {
                return res.status(500).json({ message: err.message });
            })


    };

    getSumFilm = (req, res) => {
        this.FilmService.getSumFilm()
            .then((getSumFilm) => {
                res.status(200).json(getSumFilm);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };

    updateFilm = async (req, res) => {
        upload(req, res, async (err) => {
            const id = req.params.id;
            const filmData = req.body;
            const file = req.files;
            


            if (!file) {
                return res.status(400).json({ message: 'Image or video is required' });
            }
           

            if (!filmData.titre || !filmData.description || !filmData.genre || !filmData.duree || !filmData.annee) {
                res.status(400);
                throw new Error("All fields are required")
            }

            return this.FilmService.updateFilm(id, filmData,file)
                .then((updatedFilm) => {

                    res.status(200).json({ message: "Film updated successfully", updatedFilm });
                }
                ).catch((err) => {

                    return res.status(500).json({ message: err.message });
                })

        })

    };

    deleteFilm = async (req, res) => {
        const id = req.params.id
        this.FilmService.deleteFilm(id)
            .then(

                res.status(200).json({ message: "film delete seccessfuly " })
            )
            .catch(err => {
                return res.status(500).json({ message: err.message });
            })


    };

}

export default new FilmController();