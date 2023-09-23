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
}

module.exports = PatientService;