const mongoose = require('mongoose');
const db = require("../config/db");

const {Schema} = mongoose;

const appointmentSchema = new Schema({
    patient:{
        patient_id:{type: mongoose.Schema.Types.ObjectId, ref: 'PatientModel'},
        name: String
    },
    doctor:{
        doctor_id:{type: mongoose.Schema.Types.ObjectId,ref: 'DoctorModel'},
        name: String
    },
    date:Date,
    time: String,
    reason: String
});

const Appointment = db.model('appointment',appointmentSchema);
module.exports = Appointment;