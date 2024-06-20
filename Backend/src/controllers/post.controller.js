import { Post } from '../models/post.model.js';
import { User } from '../models/user.model.js';



//create post
const createPost = async (req, res) =>{
    try{
        const { text } = req.body;
        const {id}=req.user;

        //check user is present
        if(!id){
            return res.status(400).json({
                success:false,
                message:"User is not present "
            })
        }
        const user = await User.findById({id});

        if(!user){
            return res.status(400).json({
                success:false,
                message:"User is not present "
            })
        }
        //String post in database
        const newPost = await Post.create({
            text,
            postCreater:user._id,
        })
        console.log("post is stored in database ", response);

        // add the new post to the user schema
        await User.findByIdAndUpdate(
            {
                _id:id,
            },
            {
                $push:{
                    posts:newPost._id,
                }
            }
        )

        return res.status(201).json({
            success:true,
            data: newPost,
            message:"Post is created successfully",
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Post is not created",
        })
    }
}

// get all of posts of a single user
const getAllPostsByUser  = async (req, res)=> {
    try{
        const { id }=req.user;

        if(!id){
            return res.status(400).json({
                success:false,
                message:"User is not present "
            })
        }

        const user =  User.findById({_id:id});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User is not present "
            })
        }

        const userPosts = await Post.find({ postCreater: id })
        .populate('postCreater', 'firstName lastName email')
        .exec();

        console.log("UserAllPosts, ", userPosts);

        return res.status(200).json({
            success: true,
            data: userPosts,
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Post is not created",
        })
    }
}
//get all posts
const getAllPosts = async (req, res)=> {
    try{
        // const allPosts = await Post.find(
        //     { status: "Published"},
        //     {
        //         text:true,
        //         postCreater:true,
        //     }
        // )
        // .populate()
        // .exec();

        const allPosts = await Post.find(
            { status: 'Published' },
            'text postCreater' // Specify the fields to include
          )
            .populate('postCreater', 'firstName lastName email') // Specify the fields to populate
            .exec();

        return res.status(200).json({
            success: true,
            data: allPosts,
          })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Post is not created",
        })
    }
}

//delete post
const deletePost = async (req, res) =>{
    try{
        const userId = req.user.id;
        const postId = req.post.id;

        if(!userId){
            return res.status(400).json({
                success:false,
                message:"User is not present "
            })
        }

        const user =  User.findById({_id:userId});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User is not present "
            })
        }

        if(!postId){
            return res.status(400).json({
                success:false,
                message:"Post is not present "
            })
        }

        const post =  Post.findById({_id:postId});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Post is not present "
            })
        }

        //deleting the post in DB
        await Post.findByIdAndDelete({ _id:postId });
                // or
        // await Profile.findByIdAndDelete({
        //     _id: new mongoose.Types.ObjectId(postId),
        // })        

        //deleting post id from user
        await User.findByIdAndUpdate(
            {
                _id:userId
            },
            {
                $pull:{
                    posts:post._id
                }
            }
        )
        return res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
          });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to delete post',
        });
    }

}

export {
    createPost,
    getAllPostsByUser,
    getAllPosts,
    deletePost
}