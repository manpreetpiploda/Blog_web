import React from 'react'
import { FaHandsClapping } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";

function PostPreview({userName, title, postText, postImg, createdAt, claps, comments}) {
  return (
    <div className='flex w-[500px] h-[200px]'>
        <div className='flex gap-2 '>
            <div className='flex border border-dark-900 rounded-s-full p-2'>
                I
            </div>
            <p>{userName}</p>
        </div>
        <div className='flex justify-between'>
            <div className='max-w-[75%]'>
                <p>{title}</p>

                {/* <p>{postText}</p> */}
                <p>asas asa s ads a dfas fa fa ad a ga ga ga g aa f as fas fa fa f</p>

                <div className='flex'>
                    <p>{createdAt}</p>

                    <div>
                        <FaHandsClapping /> <p>{claps}</p>
                    </div>
                    <div><FaComment /> <p>{comments}</p></div>
                </div>
            </div>

            <div className='flex h-[80px] w-[90px]'>
                <img src={postImg} alt='post image'/>
            </div>
        </div>
    </div>
  )
}

export default PostPreview