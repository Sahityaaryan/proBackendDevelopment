import mongoose from 'mongoose';

const {model , Schema} = mongoose;


import { subTodoSchema } from './sub_todo.model';

const todoschema = new Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true,
        },
        color:{
            type: String,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref:'User' // this is exactly same as the model name in our code "user.models.js"
        },
        subToDos:[
            {
                type:Schema.Types.ObjectId,
                ref:'SubToDo'
            }
        ]

    },{timestamps: true}
    );

export const Todo = model('Todo',todoschema);