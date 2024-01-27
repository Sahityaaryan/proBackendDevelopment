

import mongoose from 'mongoose';

// creating Schema
export const categorySchema = new mongoose.Schema(
    
{
    name:{
        type: String,
        required: true,
    }
} , {timestamps: true}
);


// exporting the model
export const Category = mongoose.model('Category',categorySchema);



/**
 *                     //% Docs
 * 
 * 
 *  Here we have designed the model of the User and it requires two things 
 * 
 *       //*     model('name of model', structure or schema of the model)
 * 
 * 
 *        //  % Schema
 * 
 *  //*    first object will be the fields and you can define the validations to it as well if you want to create the "createdAt" or "updatedAt" properties then you have to pass a second object "timestamps" 
 * 
 * 
 *            //%  Important points
 * 
 *  //* 1. Model (relation == model (MongoDb)) name in the mongodb will be stores in the plural and small letters (Users --> users)
 * 
 * 
 * 
 */


