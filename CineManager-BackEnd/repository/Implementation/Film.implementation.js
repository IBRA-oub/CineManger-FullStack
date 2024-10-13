import FilmInterface from '../Interface/Film.interface.js';
import FilmModel from "../../models/Film.mjs";
import asyncHandler from "express-async-handler";
import path from 'path';
import upload from '../../middleware/configMulter.js';
import { log } from 'console';


class FilmRepository extends FilmInterface {

    getAllFilm = async (baseURL) => {
        return FilmModel.Film.find()
            .then(films => {
                const fixImageFilm = films.map(film => ({
                    ...film._doc,
                    image: `${baseURL}${encodeURIComponent(film.image)}`
                }));
                return fixImageFilm;
            })
            .catch(err => {
                throw err;
            });
    };


    createFilm = async (filmData, file) => {

        const image = file ? file.filename : null;
        FilmModel.Film.create({
            ...filmData,
            image: image,
        })
            .then(film => {

                return film;
            })
            .catch(err => {
                throw err;
            })


    }

    getFilm = async (baseURL, id) => {
        return FilmModel.Film.findById(id)
            .then(film => {

                const fixImageFilm = {
                    ...film._doc,
                    image: `${baseURL}${encodeURIComponent(film.image)}`
                };

                return fixImageFilm;
            })
            .catch(err => {
                throw err;
            });
    };



    updateFilm = async (id,filmData) => {
        console.log(id);
        return FilmModel.Film.findById(id)
            .then(() => {
                return FilmModel.Film.findByIdAndUpdate(
                    id,
                    filmData,
                    { new: true }
                );
            }).catch(err => {
                throw err;
            })

    };



    deleteFilm = async (id) => {
        FilmModel.Film.findById(id)
            .then((film) => {

                if (!film) {
                    throw err;
                }

                FilmModel.Film.deleteOne(film)
                    .then(() => {

                        return true;
                    }).catch(err => {
                        throw err;
                    })
            })
            .catch(err => {
                throw err;
            });

    }
}

export default FilmRepository;