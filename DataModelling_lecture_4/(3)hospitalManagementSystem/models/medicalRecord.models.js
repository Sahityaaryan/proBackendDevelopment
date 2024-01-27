import mongoose from 'mongoose';

const {model , Schema} = mongoose;

export const medicalRecordSchema = new Schema(
    {

    },{timestamps: true}
);


export const MedicalRecord = model(
    'MedicalRecord',
    medicalRecordSchema
)