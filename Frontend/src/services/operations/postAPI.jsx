import toast from 'react-hot-toast';
import { apiConnector } from '../apiConnector';
import { postEndpoints } from '../apis'

const {
    CREATE_POST_API,
    GETALL_POSTS_API,
    GETALL_POSTS_BY_USER,
    DELETE_POST
} = postEndpoints;


export function createPost(postText,navigate) {
    return async(dispatch)=>{
        try{
            const response =await apiConnector("POST", CREATE_POST_API, {
                postText
            });

            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("Post is created");

            navigate("/");
        }
        catch(error){
            console.log("Create post API ERROR............", error)
            toast.error("Could Not Send OTP")
        }
    }
}