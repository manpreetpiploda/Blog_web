import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        gender:{
            type:String
        },
        about:{
            type:String
        },
        phoneNumber:{
            type:Number
        },
        dateOfBirth:{
            type:String
        }
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