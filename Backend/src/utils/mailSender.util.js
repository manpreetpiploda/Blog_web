import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mailSender = async (email,otp)=>{
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from: 'Wolf Blogs ',
            to:`${email}`,
            subject: `Email verification`,
            html: `<p>Your OTP code is <b>${otp}</b></p>`,
        })

        return info;
    }
    catch(error){
        console.log(error);
    }
}

export {
    mailSender
}