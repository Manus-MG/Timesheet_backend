const { number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Fname: {
        type: String,
        required: [true, "Please tell us your First name!"],
      },
      Lname: {
        type: String,
        required: [true, "Please tell us your Last name!"],
      },
      dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    
    mob:Number,
    
      email: {
        type: String,
        required: [true, "Please tell us your email!"],
        unique: true,
        lowercase: true,
      },
      niNumb: { type: Number },
      password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 8,
      },
    
      passwordConfirm: {
        type: String,
        required: true,
      },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;