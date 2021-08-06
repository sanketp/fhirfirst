const { modelNames } = require('mongoose')

const patientRouter = require('express').Router()
const Patient = require('../models/patient')

patientRouter.get('/', (request, response) => {
    Patient
      .find({})
      .then(patients => {
        response.json(patients)
        })
})

patientRouter.post('/', (request, response) => {
    const newPatient = new Patient(request.body)
  
    newPatient
      .save()
      .then(result => {
        response.status(201).json(result)
      })
})


module.exports = patientRouter