import mongoose from 'mongoose';

const {model , Schema} = mongoose;

const qualificationSchema = new Schema({
    tenthPercentage:{
        type: Number,
        required:true,
        default: 0,
    },
    twelthPercentage:{
        type: Number,
        required:true,
        default: 0,
    },
    specialization:{
        type: String,
        enum: ['Dermatology','Neurology','Obstetrics and gynecology','Pathology','Pediatrics','Psychiatry'],
        default:'Psychiatry',
    }
})

const doctorschema = new Schema({
    name:{
        type: String,
        required: true,
    },
    qualifications:{
        type: [qualificationSchema]
    },
    noOfPatientsTreated:{
        type: Number,
        required: true,
        default: 0,
    },
})

export const Doctor = model("Doctor", doctorschema);