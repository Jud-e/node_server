const { PrismaClient } = require('@prisma/client');
// const mongoose = require('mongoose');

const prismaClient = new PrismaClient();

// const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/pharm').on('open',()=>{
//     console.log("Mondodb connected")
// }).on('error',()=>{
//     console.log("Mongodb error")
// });
// module.exports = connection;
module.exports = prismaClient;