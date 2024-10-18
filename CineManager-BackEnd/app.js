// const express = require('express');
import express from "express";
// const dotenv = require('dotenv');
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";
import usersRouter from "./routes/usersRoutes.js";
import filmRouter from "./routes/filmsRoutes.js";
import salleRouter from "./routes/sallesRoutes.js";
import seanceRouter from "./routes/SeancesRoutes.js";
import ratingRouter from "./routes/ratingRoutes.js";
import commentRouter from "./routes/commentRoutes.js";
import reservationRouter from "./routes/reservationRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import cors from 'cors';
import path from 'path';
const app = express();

dotenv.config(); //get variable from .env
connectDB();

app.use(cors());

app.use(express.json());
app.use(errorHandler);

app.use('/uploads', express.static('uploads'));


app.use('/api/user', usersRouter);
app.use('/api/film', filmRouter);
app.use('/api/salle', salleRouter);
app.use('/api/rating', ratingRouter);
app.use('/api/comment', commentRouter);
app.use('/api/seance', seanceRouter);
app.use('/api/getAllUser', seanceRouter);
app.use('/api/reservation', reservationRouter);
app.use('/api/admin', adminRouter);
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})