import AdminInterface from '../Interface/Admin.interface.js';
import UserModel from "../../models/User.mjs";
import bcrypt from "bcrypt";
// import crypto from 'crypto';
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

class AdminRepository extends AdminInterface {

    createAdmin = async(nom, email, password) => {
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
                    password: hashedPassword,
                    role: "admin"
                });
            })
            .then(user => {
                return { _id: user.id, email: user.email, role: user.role };
            })
            .catch(err => {
                throw err;
            });
    };

    getAllAdmin = async() => {
        return UserModel.User.find({ role: "admin" })
            .then(admins => admins)
            .catch(err => {
                throw err;
            });
    };

    getAdmin = async(id) => {
        return UserModel.User.findById(id)
            .then(admin => {
                if (!admin || admin.role !== "admin") {
                    throw new Error("Admin not found");
                }
                return admin;
            })
            .catch(err => {
                throw err;
            });
    };

    updateAdmin = async(id, data) => {
        return UserModel.User.findById(id)
            .then(admin => {
                if (!admin || admin.role !== "admin") {
                    throw new Error("Admin not found");
                }
                if (data.password) {
                    return bcrypt.hash(data.password, 10).then(hashedPassword => {
                        data.password = hashedPassword;
                        return UserModel.User.findByIdAndUpdate(id, data, { new: true });
                    });
                }
                return UserModel.User.findByIdAndUpdate(id, data, { new: true });
            })
            .then(updatedAdmin => updatedAdmin)
            .catch(err => {
                throw err;
            });
    };

    deleteAdmin = async(id) => {
        return UserModel.User.findById(id)
            .then(admin => {
                if (!admin || admin.role !== "admin") {
                    throw new Error("Admin not found");
                }
                return UserModel.User.deleteOne(admin);
            })
            .then(() => ({ message: "Admin deleted successfully" }))
            .catch(err => {
                throw err;
            });
    };


}

export default AdminRepository;
