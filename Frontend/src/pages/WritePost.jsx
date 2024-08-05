import React, { useState } from 'react'

import { MdOutlineMoreHoriz } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setPost, resetPostState } from '../slices/postSlice';
import { createPost } from '../services/operations/postAPI';

function WritePost() {

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [publish, setPublish]=useState(false);
    const [title, setTitle]=useState('');
    const [content, setContent]=useState('');


    function handleTitleChange(e){
        setTitle(e.target.value);
    }

    function handleContentChange(e){
        setContent(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        dispatch(setPost(content));
        
        dispatch(createPost(content,navigate));

        setTitle('');
        setContent('');

    }


  return (
    <form onSubmit={handleSubmit} className=' flex h-full w-full justify-center items-center'>
        <div className='w-9/12 '>
            {/* publish bar */}
            <div className='flex justify-between items-center'>
                <div>
                    <div className='font-bold text-xl'>Medium</div>
                    <div>Draft</div>
                </div>
                <div className='flex gap-4'>
                    <button type='submit' className={`cursor-pointer bg-green-600 text-sm px-2 text-white rounded-2xl 
                        ${title==="" && content==="" ?
                         "cursor-not-allowed bg-green-400" : 
                         "cursor-pointer" }
                         `}
                         disabled={title === "" && content === ""}
                         >Publish</button>

                    <MdOutlineMoreHoriz className='h-6 w-6 text-gray-500 hover:text-gray-900 cursor-pointer'/>

                    <IoMdNotificationsOutline className='h-6 w-6 text-gray-500 hover:text-gray-900 cursor-pointer'/>

                    <div className=''>Profile</div>

                </div>
            </div>

            {/* text area */}
            <div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        required
                        className=''
                    ></textarea>
                </div>
            </div>
        </div>

    </form>
  )
}

export default WritePost