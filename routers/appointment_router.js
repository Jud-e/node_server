const router = require('express').Router();
const appointmentController = require("../controller/appointment_controller");

router.post('/create',appointmentController.makeAppointment);
router.get('/search', appointmentController.searchAppointment);
router.put('/update/:appointmentId',appointmentController.updateAppointment);
router.delete('/:appointmentId',appointmentController.deleteAppointment);

module.exports = router;
