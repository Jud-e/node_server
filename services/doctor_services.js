const prismaClient = require('../config/db');

class DoctorService{
    static async registerDoctor(email,password,specification, name){
        try {
            const createDoctor = prismaClient.doctor.create({
                data: {
                    email:email,
                    password:password,
                    name: name,
                    specification:specification
                }
            });
            return createDoctor;
        } catch (error) {
            throw error;
        }
    }

    static async findDoctor(email) {
        try {
            const doctor = prismaClient.doctor.findFirst({
                where: {email}
            });
            return doctor;
        } catch (error) {
            throw error;
        }
    }
    
    static async getDoctor(doctorId){
        try {
            const createDoctor = prismaClient.doctor.findFirst({
                where: {id: doctorId},
                include: {
                    appointment: true
                }
            });
            return createDoctor;
        } catch (error) {
            throw error;
        }
    }

    static async searchDoctor(doctorname){
        try {
            const findDoctor = prismaClient.doctor.findMany(
                {
                    where: {
                        name: doctorname
                    },
                    include: {
                        appointment: true
                    }
                }
            );
            return findDoctor;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DoctorService;