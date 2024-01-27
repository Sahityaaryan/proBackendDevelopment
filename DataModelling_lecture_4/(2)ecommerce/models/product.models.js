

import mongoose from 'mongoose';

// creating Schema
export const productschema = new mongoose.Schema(
    
{
    description:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    productImage:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        default: 0,
    },
    stock:{
        type: Number,
        default: 0,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref:"Category",
        required: true,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
} , {timestamps: true}
);


// exporting the model
export const Product = mongoose.model('Product',productschema);



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


