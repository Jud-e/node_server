const router = require('express').Router();
const patientController = require('../controller/patient_controller')

router.get('/patient/registration',patientController.register);

module.exports = router;
