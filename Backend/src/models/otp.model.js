import mongoose from "mongoose";
import mailSender from "../utils/mailSender.util.js";

const otpSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
        },
        otp:{
            type:Number,
            minlength:6,
            required:true,
        },
        createdAt:{
            type:Date,
            default:Date.now,
            expires:'5m', // Automatically remove the document after 5 minutes
        },
        // otpForUser:[{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:'User',
        // }]

    }
);
// Define a function to send emails
async function sendVerificationEmail(email, otp) {
	// Create a transporter to send emails

	// Define the email options

	// Send the email
	try {
		const mailResponse = await mailSender(
			email,
            otp
		);
		console.log("Email sent successfully: ", mailResponse.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}
otpSchema.pre("save", async function (next) {
	console.log("New document saved to database");
	
	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

export const OTP = mongoose.model("Otp", otpSchema);