import mongoose from 'mongoose';

const watchIdSchema = new Schema({
    type: Schema.Types.ObjectId,
    ref:'Video'
})

const {Schema,model} = mongoose;

const userSchema = new Schema({

    watchHistory: [watchIdSchema],
    username: {
        type: String,
        required: [true, "please enter a username"];
        unique: true,
        lowercase: true,
        trim: true,
        index: true //* If you want to enhace the searching facility on one field you can use "index: true" but choose it wisely because it is expensive doing so.
    },
    email:{
        type: String,
        required: [true, "please enter your email address"]
    },
    fullName:{
        type: String,
        required: [true, "please enter a username"];   
    },
    avatar:{
        type: String, // beccause here we are using url
        required: true,
    },
    coverImage:{
        type: String,
    },
    password:{
        type: String,
        required: [true, "please enter a password"]
    },
    refreshToken:{
        type: String,
    }
}, {timestamps: true})

export const User = model("User",userSchema);