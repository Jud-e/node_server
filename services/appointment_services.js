const prismaClient = require("../config/db");

class AppointmentService{
    static async registerAppointment(doctorId,patientId, reason){
        try {
            const createAppointment = prismaClient.appointment.create({
                data: {
                    doctorId:doctorId,
                    patientId:patientId,
                    reason:reason
                }
            });
            return createAppointment;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AppointmentService;