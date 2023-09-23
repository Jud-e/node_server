const router = require('express').Router();
const doctorController = require('../controller/doctor_controller.js')

router.post('/register',doctorController.register);
router.post('/login',doctorController.doctorLogin);
router.get('/:doctorId',doctorController.getDoctor);

// /doctor/:doctorId
module.exports = router;
