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
exports.updateAppointment = async(req,res)=>{
    try {
        const {appointmentId, status} = req.body;
        if (appointmentId == null) {
            res.status(500).json({message: "No appointments found!"})
        }
        const successRes = await AppointmentService.updateAppointment(status, appointmentId);
        res.json({status:true,success:"Appointment registered successfully", data: successRes});
    } catch (error) {
        throw error;
    }
}
exports.deleteAppointment = async(req,res)=>{
    try {
        const {appointmentId} = req.params;
        if (appointmentId == null) {
            res.status(500).json({message: "No appointments found!"})
        }
        const successRes = await AppointmentService.deleteAppointment(appointmentId);
        res.json({status:true,success:"Appointment deleted successfully", data: successRes});
    } catch (error) {
        throw error;
    }
}