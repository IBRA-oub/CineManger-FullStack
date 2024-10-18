import UserService from "../services/User.service.js";
import jwt from "jsonwebtoken";
import upload from "../middleware/configMulter.js";
// import asyncHandler from "express-async-handler";
class UserController {
    constructor() {
        this.UserService = new UserService();
    }
    registerUser = (req, res) => {
        const { nom, email, password } = req.body;
        this.UserService.create(nom, email, password)
            .then(user => {
                res.status(201).json(user);
            })
            .catch(err => {
                res.status(400).json({ message: err.message });
            });
    };

    loginUser = (req, res) => {
        const { email, password } = req.body;
        this.UserService.loginUser(email, password)
            .then(response => {
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(401).json({ message: err.message });
            });
    };

    getSumUser = (req, res) => {
        
        this.UserService.getSumUser()
            .then((getSumUser) => {
                res.status(200).json(getSumUser);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };
    currentUser = (req, res) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }

        const decoded = jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET);
        const userId = decoded.user.id;


        this.UserService.currentUser(userId)
            .then((currentUser) => {
                res.status(200).json(currentUser);
            })
            .catch((error) => {
                res.status(500).json({ message: error.message });
            });
    };

    updateUser = (req, res) => {
        upload(req, res, async (err) => {
            const userData = req.body;
            const file = req.files;


            const token = req.headers['authorization']?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Token not provided' });
            }

            const decoded = jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET);
            const userId = decoded.user.id;

            this.UserService.updateUser(userId, userData, file)
                .then((update) => {
                    res.status(201).json(update);
                })
                .catch((error) => {
                    res.status(500).json({ message: error.message });
                });

        })
    }

    requestPasswordReset = (req, res) => {
        const { email } = req.body;
        this.UserService.requestPasswordReset(email)
            .then(response => {
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(404).json({ message: err.message });
            });
    };

    resetPassword = (req, res) => {
        const { token } = req.params;
        const { password } = req.body;
        this.UserService.resetPassword(token, password)
            .then(response => {
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(400).json({ message: err.message });
            });
    };
}

export default new UserController();


