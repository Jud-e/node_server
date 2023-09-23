const router = require('express').Router();
const doctorController = require('../controller/doctor_controller.js')

router.post('/doctor-registration',doctorController.register);

module.exports = router;
