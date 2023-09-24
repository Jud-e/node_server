const router = require('express').Router();
const doctorController = require('../controller/doctor_controller.js')

router.post('/register',doctorController.register);
router.post('/login',doctorController.doctorLogin);
// router.get('/:doctorId',doctorController.getDoctor);
router.get('/:name',doctorController.searchDoctor);

// /doctor/:doctorId
module.exports = router;
