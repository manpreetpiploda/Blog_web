import jwt from "jsonwebtoken";
import dotev from "dotenv";

dotev.config();

const auth = async(req, res,next) => {
    try{
        console.log("Enter auth middleware");
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        if (!token) {
			return res.status(401).json({ success: false, message: `Token Missing` });
		}
        console.log("token in auth middleware, ", token);

        try{

            //  Verifying the JWT using the secret key stored in environment variables
            const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECTET);
            console.log("decode", decode);
            // Storing the decoded JWT payload in the request object for further use
            req.user = decode;
        }
        catch (error) {
			// If JWT verification fails, return 401 Unauthorized response
			return res.status(401).json({ success: false, message: "token is invalid" });
		}
        console.log("Authentication successfull")
        next();
	} catch (error) {
		// If there is an error during the authentication process, return 401 Unauthorized response
		return res.status(401).json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
		});
	}
}

// const auth = async (req, res, next) => {
//     try {
//       console.log("Enter auth middleware");
  
//       // Retrieve token from cookie, body, or header
//       const token = req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");
  
//       if (!token) {
//         return res.status(401).json({ success: false, message: "Token Missing" });
//       }
//       console.log("token in auth middleware: ", token);
  
//       try {
//         // Verifying the JWT using the secret key stored in environment variables
//         const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//         console.log("decode: ", decode);
        
//         // Storing the decoded JWT payload in the request object for further use
//         req.user = decode;
//       } catch (error) {
//         // If JWT verification fails, return 401 Unauthorized response
//         return res.status(401).json({ success: false, message: "Token is invalid" });
//       }
  
//       next();
//     } catch (error) {
//       // If there is an error during the authentication process, return 401 Unauthorized response
//       return res.status(401).json({
//         success: false,
//         message: "Something Went Wrong While Validating the Token",
//       });
//     }
//   };
  

export { auth };