const express = require('express');
const body_parser = require('body-parser');
const patientRoute = require('./routers/patient_router');
const doctorRoute = require('./routers/doctor_router');

const app = express();

app.use(body_parser.json());

app.use('/',patientRoute);
app.use('/',doctorRoute);

module.exports = app;