import UserInterface from '../Interface/User.interface.js';
import UserModel from "../../models/User.mjs";
import bcrypt from "bcrypt";
import crypto from 'crypto';
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import sendMail from "../../email.js";

class UserRepository extends UserInterface {

    create = async (nom, email, password) => {
        return UserModel.User.findOne({ email })
            .then(userAvailable => {
                if (userAvailable) {
                    throw new Error("User already exists");
                }
                return bcrypt.hash(password, 10);
            })
            .then(hashedPassword => {
                return UserModel.User.create({
                    nom,
                    email,
                    password: hashedPassword
                });
            })
            .then(user => {
                return { _id: user.id, email: user.email, role: user.role };
            })
            .catch(err => {
                throw err;
            });
    };

    loginUser = async (email, password) => {
        return UserModel.User.findOne({ email })
            .then(user => {
                if (user && bcrypt.compare(password, user.password)) {
                    const accessToken = jwt.sign({
                        user: {
                            nom: user.nom,
                            email: user.email,
                            role: user.role,
                            id: user.id
                        },
                    }, process.env.ACCESSS_TOKEN_SECRET, { expiresIn: '3h' });
                    return { accessToken };
                } else {
                    throw new Error("Email or password is not valid");
                }
            })
            .catch(err => {
                throw err;
            });
    };


    requestPasswordReset = async (email) => {
        return UserModel.User.findOne({ email })
            .then((user) => {
                if (!user) {
                    throw new Error('User not found');
                }

                const token = crypto.randomBytes(20).toString('hex');
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000;

                return user.save().then(() => {
                    const resetUrl = `http://localhost:5173/reset-password/${token}`;
                    return sendMail(
                        user.email,
                        "Password Reset",
                        `You are receiving this because you have requested the reset of your password.\n\n` +
                        `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
                        `${resetUrl}\n\n` +
                        `If you did not request this, please ignore this email and your password will remain unchanged.\n`
                    );
                }).then(() => {
                    return { message: 'Password reset link has been sent to your email.' };
                });
            })
            .catch(err => {
                throw err;
            });
    };

    resetPassword = async (token, password) => {
        return UserModel.User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        })
            .then(user => {
                if (!user) {
                    throw new Error('Password reset token is invalid or has expired.');
                }
                return bcrypt.hash(password, 10).then(hashedPassword => {
                    user.password = hashedPassword;
                    user.resetPasswordToken = undefined;
                    user.resetPasswordExpires = undefined;
                    return user.save().then(() => {
                        return { message: 'Password has been reset successfully.' };
                    });
                });
            })
            .catch(err => {
                throw err;
            });
    };


}

export default UserRepository;
