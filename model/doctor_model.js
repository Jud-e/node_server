const mongoose = require('mongoose');
const db = require("../config/db");

const {Schema} = mongoose;

const doctorSchema = new Schema({
    email:{
        type:String,
        lowercase: true,
        required: [true,"can't be blank"],
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    firstName: String,
    lastName: String,
    phone: String,
    specification: {
        type: String,
        required: [true, "can't be false"]
    },
    office_address:{
        street: String,
        city: String,
        state: String
    }
});

const DoctorModel = db.model('doctor',doctorSchema);
module.exports = DoctorModel;