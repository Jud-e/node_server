const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const db = require("../config/db");

const {Schema} = mongoose;

const patientSchema = new Schema({
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
});

patientSchema.pre('save', async function () {
    try {
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await(bcrypt.hash(user.password, salt));
        user.password = hashpass;

    } catch (error) {
        throw error;
    }
})

const PatientModel = db.model('patient',patientSchema);
module.exports = PatientModel;