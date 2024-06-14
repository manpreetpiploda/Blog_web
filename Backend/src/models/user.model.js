import mongoose from 'mongoose';

const userSchema= new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true,
        },
        lastName:{
            type:String,
            // required:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
            trim:true,
            minlength:6
            
        },
        email:{
            type:String,
            required:true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                'Please fill a valid email address',
            ],
        },
        profilePicture:{
            type:String,
        },
        posts:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }],
        profile:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Profile'
        },
        followers:[{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Follower',
        }]
    },
    { timestamps:true }
)

export const User=mongoose.model("User", userSchema);