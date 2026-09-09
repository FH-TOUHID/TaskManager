import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});
const task=mongoose.model(
    "taskmodel",taskschema,"createdTasks"
)

export default task;