const DoctorService = require('../services/doctor_services');

exports.register = async(req,res, next)=>{
    try {
        const {email,password,specification} = req.body;
        const successRes = await DoctorService.registerDoctor(email,password,specification);

        res.json({status:true,success:"Doctor registered successfully"});
    } catch (error) {
        throw error;
    }
}