import FilmInterface from '../Interface/Film.interface.js';
import FilmModel from "../../models/Film.mjs";
// import asyncHandler from "express-async-handler";
// import path from 'path';
// import upload from '../../middleware/configMulter.js';
// import { log } from 'console';
import minio from '../../minio.js';


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

        // const image = file.image ? file.image[0].filename : null;
        // const video = file.video ? file.video[0].filename : null;
        
        const image = await this.uploadMoviePoster(file.image[0], 'images');
        const video = await this.uploadMoviePoster(file.video[0], 'videos');
        FilmModel.Film.create({
            ...filmData,
            image: image,
            video: video
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



    updateFilm = async (id, filmData) => {
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

    async uploadMoviePoster(file, folder) {
        const bucketName = 'cinemanager';
        const fileName = `${folder}/${file.originalname}`;

        const exists = await minio.bucketExists(bucketName);
        if (!exists) {
            await minio.makeBucket(bucketName, 'us-east-1');
        }


        await minio.fPutObject(bucketName, fileName, file.path);
        return `http://127.0.0.1:9000/${bucketName}/${fileName}`;
    }
}

export default FilmRepository;