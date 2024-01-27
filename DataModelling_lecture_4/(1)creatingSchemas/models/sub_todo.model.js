import mongoose from 'mongoose';

const {model , Schema} = mongoose;
export const subTodoSchema = new Schema(
    {
        content:{
            type: String,
            required: true,
        },
        MarkedAsDone: {
            type: Boolean,
            default: false,
        },
         createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
         }

    },{timestamps: true}
    )

export const SubToDo = model('SubToDo',subTodoSchema)