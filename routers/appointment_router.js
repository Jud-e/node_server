const router = require('express').Router();
const appointmentController = require("../controller/appointment_controller");

router.post('/create',appointmentController.makeAppointment);
router.get('/search', appointmentController.searchAppointment);

module.exports = router;
