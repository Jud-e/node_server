const prismaClient = require("../config/db");

class PatientService{
    static async registerPatient(email,password, name){
        try {
            const createPatient = prismaClient.patient.create({
                data: {
                    email:email,
                    password:password,
                    name:name
                }
            });
            return createPatient;
        } catch (error) {
            throw error;
        }
    }
    static async getPatient(patientId){
        try {
            const createpatient = prismaClient.patient.findFirst({
                where: {id: patientId},
                include: {
                    appointment: true
                }
            });
            return createpatient;
        } catch (error) {
            throw error;
        }
    }

    static async findPatient(email) {
        try {
            const patient = prismaClient.patient.findFirst({
                where: {email}
            });
            return patient;
        } catch (error) {
            throw error;
        }
    }
    
    static async deletePatient(patientId){
        try {
            const deletePatient = prismaClient.patient.delete({
                where: {
                    id: patientId
                }
            });
            return deletePatient;
        } catch (error) {
            throw error;
        }
    }

    static async updatePatient(patientId,password,phoneNumber){
        try {
            const updatePatient = prismaClient.patient.update({
                where: {
                    id: patientId
                },
                data: {
                    password: password,
                    phoneNumber: phoneNumber
                }
            });
            return updatePatient;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PatientService;