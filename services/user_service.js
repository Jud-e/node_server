const prismaClient = require("../config/db");

class UserService{
    static async registerUser(name,email) {
        try {
            const createDoctor = prismaClient.user.findFirst({
                data: {
                    name: name,
                    email:email
                },
                include: {
                    posts: true,
                }
            })

            const posts = prismaClient.post.findMany({
                include: {
                    comments: true,
                    author: true
                }
            })
            return  createDoctor;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;