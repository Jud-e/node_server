const AppointmentService = require("../services/appointment_services");

exports.makeAppointment = async(req,res)=>{
    try {
        const {doctorId,patientId, reason, date} = req.body;
        if (patientId == null) {
            res.status(500).json({message: "Please provide a patient id"})
        }
        if (doctorId == null) {
            res.status(500).json({message: "Please provide a doctor id"})
        }
        const successRes = await AppointmentService.registerAppointment(doctorId,patientId,reason, date);

        res.json({status:true,success:"Appointment registered successfully"});
    } catch (error) {
        throw error;
    }
}
exports.searchAppointment = async(req,res)=>{
    try {
        const {doctorId,patientId} = req.body;
        if (patientId == null) {
            res.status(500).json({message: "Please provide a patient id"})
        }
        if (doctorId == null) {
            res.status(500).json({message: "Please provide a doctor id"})
        }
        const successRes = await AppointmentService.searchAppointment(doctorId,patientId);

        res.json({status:true,success:"Appointment registered successfully"});
    } catch (error) {
        throw error;
    }
}