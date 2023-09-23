const router = require('express').Router();
const patientController = require('../controller/patient_controller')

router.post('/register',patientController.register);
router.post('/login',patientController.patientLogin);
router.get('/:patientId',patientController.getPatient);

module.exports = router;
