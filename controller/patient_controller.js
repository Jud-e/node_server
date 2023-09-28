const PatientService = require('../services/patient_services');

register = async(req,res, next)=>{
    try {
        const {email,password,name} = req.body;
        const successRes = await PatientService.registerPatient(email,password,name);

        res.json({status:true,success:"User registered successfully"});
    } catch (error) {
        throw error;
    }
}

patientLogin = async(req,res)=>{
    try {
        const {email, password} = req.body;
        const patient = await PatientService.findPatient(email);

        res.json({status:true,success:"User registered successfully"});
    } catch (error) {
        throw error;
    }
}
getPatient = async(req, res)=>{
    try {
        const {patientId} = req.params;
        const successRes = await PatientService.getPatient(patientId);
        res.json({status:true,success:"Patient registered successfully", data: successRes});
    } catch (error) {
        throw error;
    }
}

updatePatient = async(req, res)=>{
    try {
        const {patientId, password,phoneNumber} = req.body;
        if (patientId == null) {
            res.status(500).json({message: "No patients found!"})
        }
        const successRes = await PatientService.updatePatient(password,phoneNumber,patientId);
        res.json({status:true,success:"Patient updated successfully", data: successRes});
}
catch (error) {
    throw error;
}
}

deletePatient = async(req, res)=>{
    try {
        const {patientId} = req.params;
        if (patientId == null) {
            res.status(500).json({message: "No patients found!"})
        }
        const successRes = await PatientService.deletePatient(patientId);
        res.json({status:true,success:"Patient deleted successfully", data: successRes});
}
catch (error) {
    throw error;
}}
module.exports = {
    register, getPatient, patientLogin, deletePatient
}