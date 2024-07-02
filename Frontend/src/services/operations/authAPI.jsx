import {apiConnector} from "../apiConnector"
import { authEndpoints } from "../apis"
import { setLoading } from "../../slices/authSlice"

import { toast } from "react-hot-toast"

const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API
} =authEndpoints
export function sendOtp(email, navigate){
    return async ( dispatch)=>{
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST", SENDOTP_API, {
                email
            });

            console.log("SENDOTP API RESPONSE............", response)

            console.log(response.data.success)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("OTP send successfully")
            navigate("/verify-email")
        }
        catch(error){
            console.log("SENDOTP API ERROR............", error)
            toast.error("Could Not Send OTP")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function signUp(
        firstName, 
        lastName, 
        email, 
        password, 
        confirmPassword,
        otp, 
        navigate
    ){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true));
        try{
            console.log("inside sign up auth api ")
            const response = await apiConnector("POST", SIGNUP_API,{
                firstName, 
                lastName, 
                email, 
                password, 
                confirmPassword,
                otp, 
            });

            console.log("SIGNUP_API RESPONSE............", response)

            console.log(response.data.success)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("User sign up uccessfully")
            navigate("/")

        }
        catch(error){
            console.log("SIGNUP_API API ERROR............", error)
            toast.error("Could Not create User ")
            navigate("/signup")
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId)
        
    }
}