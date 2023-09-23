const router = require('express').Router();
const patientController = require('../controller/patient_controller')

router.post('/register',patientController.register);
router.post('/login',patientController.patientLogin);

module.exports = router;
