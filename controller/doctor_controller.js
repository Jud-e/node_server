const DoctorService = require('../services/doctor_services');

exports.register = async(req, res)=>{
    try {
        const {email,password,specification,name} = req.body;
        const successRes = await DoctorService.registerDoctor(email,password,specification,name);

        res.json({status:true,success:"Doctor registered successfully"});
    } catch (error) {
        throw error;
    }
}