const express = require('express');
const body_parser = require('body-parser');
const patientRoute = require('./routers/patient_router');
const doctorRoute = require('./routers/doctor_router');
const appointmentRoute = require('./routers/appointment_router');

const app = express();


const port = 3000;

app.use(body_parser.json());

app.use('/patient', patientRoute);
app.use('/doctor', doctorRoute);
app.use('/appointment', appointmentRoute);

app.get('/',(req, res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`Server listening on port: http://localhost:${port}`)
})