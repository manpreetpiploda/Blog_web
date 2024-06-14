import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        text:{
            type:String,
        },
        createdAt:{
            type:Date,
            default:Date.now,
            immutable:true,
        },
        //store the id of the user who created it
        postCreater:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
    
    }
)

export const Post= mongoose.model("Post", postSchema);