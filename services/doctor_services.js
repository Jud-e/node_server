const prismaClient = require('../config/db');

class DoctorService{
    static async registerDoctor(email,password,specification, name){
        try {
            const createDoctor = prismaClient.doctor.create({
                data: {
                    email:email,
                    password:password,
                    name:name,
                    specification:specification
                }
            });
            return createDoctor;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DoctorService;