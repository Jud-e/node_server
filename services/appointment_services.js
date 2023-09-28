const prismaClient = require("../config/db");

class AppointmentService{
    // create
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
//read appointments
    static async searchAppointment(patientId, doctorId) {
        try {
            const searchAppointment = prismaClient.appointment.findMany({
                where: {
                    patientId,
                    OR: {doctorId}
                }
            });
            return searchAppointment;
        } catch (error) {
            throw error;
        }
    }

    static async findAppointment(appointmentId) {
        try {
            const findAppointment = prismaClient.appointment.findOne({
                where: {
                    id: appointmentId
                },
                include: {
                    doctorId: true,
                    patientId: true
                }
            });
            return findAppointment;
        } catch (error) {
            throw error;
        }
    }
//delete appointments
    static async deleteAppointment(appointmentId){
        try {
            const deleteAppointment = prismaClient.appointment.delete({
                where: {
                    id: appointmentId
                }
            });
            return deleteAppointment;
        } catch (error) {
            throw error;
        }
    }

    //update appointments
    static async updateAppointment(status, appointmentId){
        try {
            const updateAppointment = prismaClient.appointment.update({
                where: {
                    id: appointmentId
                },
                data: {
                    status: status
                }
                
            });
            return updateAppointment;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AppointmentService;