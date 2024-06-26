import { User } from "../models/user.model.js";
import { OTP } from "../models/otp.model.js";
import { Profile } from "../models/profile.model.js";

import otpGenerator from "otp-generator"

const signup = async (req, res) => {
    try{
        const{ 
            firstName,
            lastName,
            password,
            confirmPassword,
            email,
            otp,
        }=req.body;

        if(!firstName || !password || !confirmPassword || !email || !otp){
            return res.status(403).json({
                success: false,
                message: "All Fields are required",
              })
        }
        console.log("All fields are present")
        //password and confirmPassword mattches or not
        if (password !== confirmPassword) {
            return res.status(400).json({
              success: false,
              message:
                "Password and Confirm Password do not match. Please try again.",
            })
        }
        console.log("password checked")
        //check email is unique
        const checkEmail= await User.findOne({email});
        if(checkEmail){
            return res.status(400).json({
                success:false,
                message:"User is already exist with this email ",
            })
        }
        console.log("OTP ", otp);
        console.log(typeof otp);
        //verifying otp
        const response = await OTP.findOne({email}).sort({createdAt: -1}).exec();
        console.log(typeof response.otp);
        console.log("response from OTP ", response);
        

        if (!response) {
            return res.status(400).json({
                success:false,
                message:"OTP not found ",
            })
        }else if(String(response.otp) !==otp){
            return res.status(400).json({
                success:false,
                message: "The OTP is not valid",
            })
        }

        //set details of profile null
        const profile = await Profile.create({
            about:null,
            phoneNumber:null,
            dateOfBirth:null,
            profilePicture:null
        })

        //create user 
        const user = await User.create({
            firstName,
            lastName,
            password,
            email,
            profile:profile._id,
        })
        console.log("User is created ");

        return res.status(200).json({
            success: true,
            user,
            message: "User registered successfully",
          })
    }
    catch(err){
        console.error(err)
        return res.status(500).json({
          success: false,
          message: "User cannot be registered. Please try again.",
        })
    }
}
//login

const login = async (req, res) => {
    try{
        const { email, password } = req.body;

        if(!email || !password ){
            return res.status(403).json({
                success:false,
                message:"Password and email required "
            })
        }
        console.log("before  verifying user");
        //verify user is present or not using email
        const user = await User.findOne({email});
        console.log("Checking user present or not on the basis of email ", user)

        if(!user){
            return res.status(403).json({
                success:false,
                message:"User is not present "
            })
        }
        
        
        // verify password
        // const passwordCheck =  bcrypt.compare(password, userPresent.password);
        // if(!passwordCheck){
        //     return res.status(403).json({
        //         success:false,
        //         message:"Password is wrong "
        //     })
        // }
        user.comparePassword(password, (err, isMatch)=>{
            if (err){
                return res.status(500).json({
                    success:false,
                    message:"Internal Server Error "
                })
            }
            if (!isMatch){
                return res.status(400).json({
                    success:false,
                    message:"Invalid password "
                })
            }
        })
        console.log("password is correct ");
        console.log("User ", user)

        // const token=await user.generateAccessToken();
        const token = user.generateAccessToken();

        console.log("Printing usr before adding token ", user);
        //Save token to user document in database
        user.token=token;
        // user.password=undefined;
        await user.save();

        console.log("Printing usr after adding token ", user);
        const options = {
            expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }
        return res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: `User Login Success`,
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Login fail please try again "
        })
    }
};

//send mail

const sendotp = async (req, res)=>{
    try{
        const { email }=req.body;

        if(!email){
            return res.send(401).json({
              success:true,
              message:"Please enter the data",
            })
        }
        // Check if user is already present
        // Find user with provided email
        const checkUserPresent = await User.findOne({ email })
        // to be used in case of signup
      
        // If user found with provided email
        if (checkUserPresent) {
            // Return 401 Unauthorized status code with error message
            return res.status(401).json({
              success: false,
              message: `User is Already Registered`,
            })
        }

        //generate otp of 6 digit
        let otp = otpGenerator.generate(6, 
            { 
                upperCaseAlphabets: false, 
                lowerCaseAlphabets:false,
                specialChars: false 
            });

        //Checking this otp is not already exist
        const result = await OTP.findOne({otp:otp});

        while(result){
            otp = otpGenerator.generate(6, { 
                upperCaseAlphabets: false, 
                lowerCaseAlphabets:false,
                specialChars: false 
            });
            result = await OTP.findOne({ otp: otp })
        }
        
        //string otp in database
        const otpBody= await OTP.create({
            email,
            otp
        })
        return res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otp,
          })  
      
        }
    catch(error){
        console.log(error.message)
        return res.status(500).json({ success: false, error: error.message })
    }

}

//logout


export {
    signup,
    login,
    sendotp,

}