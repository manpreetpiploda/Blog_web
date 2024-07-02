// const authApis ={
//     signup: 
// }

const BASE_URL="http://localhost:3000/api/v1"

//Auth endpoints
export const authEndpoints={
    SENDOTP_API : BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
}