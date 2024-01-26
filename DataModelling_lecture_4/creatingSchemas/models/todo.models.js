import {model , Schema} from 'mongoose';


const todoschema = Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true,
        },
        color:{
            type: String,
        },
        
    },{timestamps: true}
    );

export const Todo = model('Todo',todoschema);