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

    static async deleteDoctor(doctorId){
        try {
            const deleteDoctor = prismaClient.doctor.delete({
                where: {
                    id: doctorId
                }
            });
            return deleteDoctor;
        } catch (error) {
            throw error;
        }
    }

    static async updateDoctor(doctorId,password,affilation,address,phoneNumber){
        try {
            const updateDoctor = prismaClient.doctor.update({
                where: {
                    id: doctorId
                },
                data: {
                    password: password,
                    affilation: affilation,
                    address: address,
                    phoneNumber: phoneNumber
                }
            });
            return updateDoctor;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DoctorService;