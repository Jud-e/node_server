const PatientService = require('../services/patient_services');

exports.register = async(req,res, next)=>{
    try {
        const {email,password,name} = req.body;
        const successRes = await PatientService.registerPatient(email,password,name);

        res.json({status:true,success:"User registered successfully"});
    } catch (error) {
        throw error;
    }
}

exports.patientLogin = async(req,res)=>{
    try {
        const {email, password} = req.body;
        const patient = await PatientService.findPatient(email);

        res.json({status:true,success:"User registered successfully"});
    } catch (error) {
        throw error;
    }
}