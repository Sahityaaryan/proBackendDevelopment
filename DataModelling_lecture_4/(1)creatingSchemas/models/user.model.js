

import mongoose from 'mongoose';

// creating Schema
export const userSchema = new mongoose.Schema(
    
{
    username:{
        type: String,
        required: [true,"username is required"],
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: [true,"password is required"],
    },
    email:{
        type: String,
        required: [true,"email is required"],
        unique: true,
        lowercase: true
    }
}, 
{timestamps:true}

);


// exporting the model
export const User = mongoose.model('User',userSchema);



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


