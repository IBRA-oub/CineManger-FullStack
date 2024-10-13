
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

async function sendMail(to, subject, text) {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to,
            subject,
            text
        });
        console.log('E-mail envoyé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error.message);
    }
};

export default sendMail;
