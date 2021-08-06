const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    identifier: {
        type: String,
        required: true
    },
    name: {
        HumanName: {
            type: String,
            require: true
        },
        family: {
            type:String,
            required: false
        },
        suffix: {
            type: String,
            required: false
        }
    },  
    telcom: {
        type: String,
        required: true,
    },   
    gender: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    communication: {
        type: String,
        required: false
    }
})

patientSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Patient', patientSchema)