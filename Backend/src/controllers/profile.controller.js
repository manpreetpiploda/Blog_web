import { Profile } from '../models/profile.model.js';
import { User } from '../models/user.model.js';
import { Post } from '../models/post.model.js';


const updateProfile = async(req, res)=> {
    try{
        const { 
            gender, 
            about, 
            phoneNumber,
            dateOfBirth,
            profilePicture
        } = req.body;

        const userId = req.user.id;
        console.log("userId ", userId)

        if(!userId){
            return res.status(400).json({
                success:false,
                message:"User ID is not present "
            })
        }

        const user =await  User.findById(userId);
        console.log("user", user);
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User is not present "
            })
        }
        //finding user profile
        console.log("user profile", user.profile);
        const profile = await Profile.findById(user.profile);
        if (!profile) {
            return res.status(404).json({
              success: false,
              message: 'Profile not found',
            });
        }

        //updating profile details
       if(gender !==undefined) profile.gender=gender;
       if(about !==undefined) profile.about=about;
       if(phoneNumber !==undefined) profile.phoneNumber=phoneNumber;
       if(dateOfBirth !==undefined) profile.dateOfBirth=dateOfBirth;
       if(profilePicture !==undefined) profile.profilePicture=profilePicture;

       //save the updated profile
       await profile.save();

       return res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        profile,
      });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to update profile',
        });
    }
};

const deleteAccount = async(req, res) =>{
    try{
        const userId = req.user.id;

        if(!userId){
            return res.status(400).json({
                success:false,
                message:"User is not present "
            })
        }

        const user =  User.findById(userId);
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User is not present "
            })
        }

        //finding the profile for this user

        const profile = await Profile.findById(user.profile);
        
        if (!profile) {
            return res.status(404).json({
                success: false,
                message: 'Profile not found',
            });
        }
        
        //deleting profile
        // const profileDelete = await Profile.findByIdAndDelete(profile._id);
        await Profile.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(user.profile),
        })

        //finding posts and deleting 
        // user.posts.forEach( (post) => {
        //     Post.findByIdAndDelete(post);
        // })
        for( const postId of user.posts){
            await Post.findByIdAndDelete(postId);
        }


        //deleting user
        await User.findByIdAndDelete(userId);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({ 
            success: false, 
            message: "User Cannot be deleted successfully" 
        });
    }
}



export {
    updateProfile,
    deleteAccount,
}