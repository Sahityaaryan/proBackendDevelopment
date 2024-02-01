

import mongoose from 'mongoose';

const {Schema , model} = mongoose;

// # example of a miniSchema

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{
        type: Number,
        required: true,
    }
})

// creating Schema
export const orderSchema = new mongoose.Schema(
    
{
    orderPrice:{
        type: Number,
        required: true,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems:{
        type: [orderItemSchema]
    },
    address:{
        type: String,
        required: true,  
    },
    status:{
        type: String,
        enum: ["PENDING", "CANCELLED","DELIEVERED"],
        default: "PENDING"
    }
} , {timestamps: true}
);


// exporting the model
export const Order = mongoose.model('Order',orderSchema);



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


