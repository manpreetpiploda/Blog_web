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

//post endpoints

export const postEndpoints={
    CREATE_POST_API : BASE_URL + "/auth/createPost",
    GETALL_POSTS_API : BASE_URL + "/getAllPosts",
    GETALL_POSTS_BY_USER : BASE_URL + "/auth/getAllPostsByUser",
    DELETE_POST : BASE_URL + "/auth/deletePost",
}

