const DoctorService = require('../services/doctor_services');

register = async(req, res)=>{
    try {
        const {email,password,specification,name} = req.body;
        const successRes = await DoctorService.registerDoctor(email,password,specification,name);

        res.json({status:true,success:"Doctor registered successfully"});
    } catch (error) {
        throw error;
    }
}
doctorLogin = async(req,res)=>{
    try {
        const {email, password} = req.body;
        const doctor = await doctorService.findDoctor(email);

        res.json({status:true,success:"User registered successfully"});
    } catch (error) {
        throw error;
    }
}
getDoctor = async(req, res)=>{
    try {
        const {doctorId} = req.params;
        const successRes = await DoctorService.getDoctor(doctorId);

        res.json({status:true,success:"Doctor registered successfully", data: successRes});
    } catch (error) {
        throw error;
    }
}
searchDoctor = async(req, res)=>{
    try {
        const {doctorname} = req.params;
        const successRes = await DoctorService.searchDoctor(doctorname);
        res.json({status:true,success:"Doctors found successfully", data: successRes});
}
catch (error) {
    throw error;
}}
deleteDoctor = async(req, res)=>{
    try {
        const {doctorId} = req.params;
        if (doctorId == null) {
            res.status(500).json({message: "No patients found!"})
        }
        const successRes = await PatientService.deleteDoctor(doctorId);
        res.json({status:true,success:"Patient deleted successfully", data: successRes});
}
catch (error) {
    throw error;
}}
module.exports = {
    register, 
    getDoctor,
    doctorLogin, 
    searchDoctor,
    deleteDoctor
}