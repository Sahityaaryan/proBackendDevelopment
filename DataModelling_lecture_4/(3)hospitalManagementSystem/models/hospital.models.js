import mongoose from 'mongoose';

const {model , Schema} = mongoose;

const hospitalRecordSchema = new Schema({

    name:{
        type: String,
        required: true,
    },
    addressLine1:{
        type: String,
        required: true,
    },
    addressLine2:{
        type: String,
    },
    city:{
        type: String,
        required: true,
    },
    pincode:{
        type: String,
        required: true,
    },
    specializedIn:{
        type: String,
    }
    

},{timestamps: true}
)

export const Hospital = model(
    'Hospital',
    hospitalRecordSchema
)