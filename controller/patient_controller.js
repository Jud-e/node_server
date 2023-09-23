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
module.exports = {
    register, getPatient, patientLogin
}