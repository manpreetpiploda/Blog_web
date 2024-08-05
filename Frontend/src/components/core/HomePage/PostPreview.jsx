import React from 'react'
import { FaHandsClapping } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";

function PostPreview({userName, title, postText, postImg, createdAt, claps, comments}) {
  return (
    <div className='flex flex-col w-full max-h-[250px] border-gray-200 border-b mt-6'>
        <div className='flex gap-2 items-center'>
            <div className='flex border border-dark-900 rounded-full p-2'>
                Icon
            </div>  
            <p>{userName}</p>
        </div>
        <div className='flex justify-between mt-1 mb-7'>
            <div className='max-w-[75%]'>
                <p className='font-bold text-2xl'>{title}</p>

                {/* <p>{postText}</p> */}
                <p className='mt-2'>asas asa s ads a dfas fa fa ad a ga ga ga g aa f as fas fa fa f</p>

                <div className='flex justify-between items-center mt-5 text-gray-500'>
                    {/* left details */}
                    <div className='flex items-center gap-4'>
                        <p>{createdAt}</p>

                        <div className='flex items-center gap-2'>
                            <FaHandsClapping /> <p>{claps}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaComment /> <p>{comments}</p>
                        </div>
                    </div>
                    {/* right details */}
                    <div className='flex gap-3 text-2xl'>
                        <IoIosRemoveCircleOutline />
                        <MdOutlineBookmarkAdd />
                        <MdOutlineMoreHoriz />
                    </div>
                </div>
            </div>
            
            {/* Image */}
            <div className='flex '>
                <img src={postImg} alt='post image' className=' h-[100px] w-[150px] object-cover rounded-sm'/>
            </div>
        </div>
    </div>
  )
}

export default PostPreview