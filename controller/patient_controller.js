const PatientService = require('../services/patient_services');

exports.register = async(req,res, next)=>{
    try {
        const {email,password} = req.body;
        const successRes = await PatientService.registerPatient(email,password);

        res.json({status:true,success:"User registered successfully"});
    } catch (error) {
        throw error;
    }
}