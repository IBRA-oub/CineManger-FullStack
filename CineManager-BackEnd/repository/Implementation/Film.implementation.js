import FilmInterface from '../Interface/Film.interface.js';
import FilmModel from "../../models/Film.mjs";
// import asyncHandler from "express-async-handler";
// import path from 'path';
// import upload from '../../middleware/configMulter.js';
// import { log } from 'console';
import minio from '../../minio.js';


class FilmRepository extends FilmInterface {

    getAllFilm = async () => {
        return FilmModel.Film.find()
            .then(films => {
                return films;
            })
            .catch(err => {
                throw err;
            });
    };


    createFilm = async (filmData, file) => {

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

    getFilm = async (id) => {
        return FilmModel.Film.findById(id)
            .then(film => {

                return film;
            })
            .catch(err => {
                throw err;
            });
    };



    updateFilm = async (id, filmData, file) => {
        
        const image = await this.uploadMoviePoster(file.image[0], 'images');
        const video = await this.uploadMoviePoster(file.video[0], 'videos');
        filmData.image = image;
        filmData.video = video;
       
        
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

    getSumFilm = async () => {
        try {
            const filmCount = await FilmModel.Film.countDocuments();
            return filmCount;
        } catch (error) {
            console.error('Error fetching film count:', error);
            throw error;
        }
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