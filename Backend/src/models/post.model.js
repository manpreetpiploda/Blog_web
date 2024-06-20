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
        status: {
            type: String,
            enum: ["Draft", "Published"],
        },
        //store the id of the user who created it
        postCreater:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
    },
    { timestamps: true }
)

export const Post= mongoose.model("Post", postSchema);