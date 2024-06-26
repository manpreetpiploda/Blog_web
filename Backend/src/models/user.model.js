import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

const SALT_WORK_FACTOR=10;
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
        token:{
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
);

// Pre-save hook to hash the password before saving
userSchema.pre('save', function(next) {
    const user = this;
  
    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
  
    // Generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);
  
      // Hash the password using the generated salt
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
  
        // Override the cleartext password with the hashed one
        user.password = hash;
        next();
      });
    });
});

//verifying the password

userSchema.methods.comparePassword = function(passwordEnterd, cb){
    bcrypt.compare(passwordEnterd, this.password, function(err, isMatch){
        if (err) return cb(err);
        cb(null, isMatch);
    });

}

// For generating JWT 
userSchema.methods.generateAccessToken= function(){
    // console.log(process.env.ACCESS_TOKEN_SECTET)
    const token = jwt.sign(
        {
          id: this._id,
          email: this.email,
        },
        process.env.ACCESS_TOKEN_SECTET,
        {
          expiresIn: '1d',
        }
      );
    // console.log("Jwt token ", token);
    return token;
}
export const User=mongoose.model("User", userSchema);