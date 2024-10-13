import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app'; // Assurez-vous d'importer votre application Express
import FilmModel from '../models/Film.mjs'; // Votre modèle de film
import path from 'path'; // Pour la gestion du chemin des fichiers

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpZCI6IjY2ZjZiYThmNTdiM2Y4MDM0ZmIxMDEwYSJ9LCJpYXQiOjE3Mjc2MjkyNjIsImV4cCI6MTcyNzYzMTA2Mn0.YEby3UB0_lZ-raCd15ODGB2Njf3t4oOx2_vorE0Z_9c"; // Assurez-vous de définir un token JWT valide ici
let filmId; // Pour stocker l'ID du film créé pour d'autres tests

// Avant de commencer les tests, connectez-vous à la base de données
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

// Après tous les tests, déconnectez la base de données
afterAll(async () => {
  await mongoose.connection.close();
});

// Test pour la création d'un film avec une image
describe('POST /api/film/createFilm', () => {
  test('devrait créer un film avec succès, y compris une image', async () => {
    const filmData = {
      titre: "Film Test avec Image",
      description: "Description du film test avec image",
      genre: "Action",
      duree: 120,
      annee: "2024-01-01" // Utilisez une date valide
    };

    const imagePath = path.resolve(__dirname, 'uploads/test-image.jpg'); // Chemin de votre image de test

    const res = await request(app)
      .post('/api/film/createFilm')
      .set('Authorization', `Bearer ${token}`)
      .attach('image', imagePath) // Ajout de l'image
      .field('titre', filmData.titre)
      .field('description', filmData.description)
      .field('genre', filmData.genre)
      .field('duree', filmData.duree)
      .field('annee', filmData.annee)
      .expect(201);
    
    // Vérifiez que la réponse contient bien les informations du film, y compris l'image
    expect(res.body).toHaveProperty('titre', filmData.titre);
    expect(res.body).toHaveProperty('image');
    filmId = res.body._id; // Stocker l'ID pour d'autres tests
  });
});

// Test pour récupérer tous les films
describe('GET /api/film/allFilm', () => {
  test('devrait récupérer tous les films, y compris les images', async () => {
    const res = await request(app)
      .get('/api/film/allFilm')
      .expect(200)
      .expect('Content-Type', /json/);
    
    // Vérifiez que la réponse est un tableau de films
    expect(res.body).toBeInstanceOf(Array);
    // Vérifiez que chaque film contient un champ 'image'
    res.body.forEach(film => {
      expect(film).toHaveProperty('image');
    });
  });
});

// Test pour récupérer un film par ID
describe('GET /api/film/getFilm/:id', () => {
  test('devrait récupérer un film par ID avec une image', async () => {
    const res = await request(app)
      .get(`/api/film/getFilm/${filmId}`)
      .expect(200)
      .expect('Content-Type', /json/);
    
    expect(res.body).toHaveProperty('_id', filmId);
    expect(res.body).toHaveProperty('image');
  });
});

// Test pour mettre à jour un film
describe('PUT /api/film/updateFilm/:id', () => {
  test('devrait mettre à jour un film', async () => {
    const updatedData = {
      titre: "Film Test Modifié avec Image",
      description: "Description modifiée"
    };

    const res = await request(app)
      .put(`/api/film/updateFilm/${filmId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedData)
      .expect(200);
    
    // Vérifiez que les données sont mises à jour
    expect(res.body).toHaveProperty('titre', updatedData.titre);
    expect(res.body).toHaveProperty('description', updatedData.description);
  });
});

// Test pour supprimer un film
describe('DELETE /api/film/deleteFilm/:id', () => {
  test('devrait supprimer un film par ID', async () => {
    const res = await request(app)
      .delete(`/api/film/deleteFilm/${filmId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body).toHaveProperty('message', 'film delete seccessfuly');
  });
});
