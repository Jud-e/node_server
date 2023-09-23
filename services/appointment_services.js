const prismaClient = require("../config/db");

class AppointmentService{
    static async registerAppointment(doctorId,patientId, reason, date){
        try {
            const createAppointment = prismaClient.appointment.create({
                data: {
                    doctorId:doctorId,
                    patientId:patientId,
                    reason:reason,
                    date: new Date().toISOString()
                }
            });
            return createAppointment;
        } catch (error) {
            throw error;
        }
    }

    static async searchAppointment(patientId, doctorId) {
        try {
            const appointment = prismaClient.appointment.findMany({
                where: {
                    patientId,
                    OR: {doctorId}
                }
            });
            return appointment;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AppointmentService;