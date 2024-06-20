import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        gender:{
            type:String,
            enum: ['Male', 'Female', 'Other'],
            default: 'Male',
        },
        about:{
            type:String,
            trim:true,
            maxlength:500,            
        },
        phoneNumber:{
            type:Number,
            minlength:10,
            maxlength:10
        },
        dateOfBirth:{
            type:Date
        },
        profilePicture:{
            type:String,
        },
        // dob: {
        //     type: Date,
        //     required: true,
        //     validate: {
        //       validator: function(value) {
        //         // Check if the date is not in the future
        //         return value <= new Date();
        //       },
        //       message: 'Date of Birth cannot be in the future',
        //     },   
        //   },
    }
)

export const Profile = mongoose.model("Profile", profileSchema);