import mongoose from 'mongoose';

class UserModel {
  constructor() {
    const usersSchema = new mongoose.Schema({
      nom: {
        type: String,
        required: [true, "Please add the contact name"],
        trim: true
      },
      email: {
        type: String,
        required: [true, "Please add the contact email address"],
        unique: [true, "email address already taken"],
        trim: true
      },
      password: {
        type: String,
        required: [true, "Please add the contact email address"],
      },
      image: {
        type: String
      },
      role: {
        type: String,
        enum: ['admin', 'client'],
        default: 'client'
      },
      banned: {
        type: Boolean,
        default: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      resetPasswordToken: String,
      resetPasswordExpires: Date,
    });

    this.User = mongoose.model("User", usersSchema);
  }
}

export default new UserModel();
