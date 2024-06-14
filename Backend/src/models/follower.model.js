import mongoose from "mongoose";

const followerSchema =new mongoose.Schema(
    {
        followedAt:{
            type:Date,
            default:Date.now,
        },
        followedUser:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    }
)

export const Follower= mongoose.model("Follower", followerSchema);