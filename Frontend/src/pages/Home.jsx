import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import StartButton from '../components/core/HomePage/StartButton'
import greenImage from "../assets/images/green.webp"

import { CiSearch } from "react-icons/ci";
import { TfiPencilAlt } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";

import { postsData,staffPicks } from '../data/postData'
import PostPreview from '../components/core/HomePage/PostPreview'
import StaffPicks from '../components/core/HomePage/StaffPicks'
import LeftCover from '../components/core/HomePage/LeftCover'
import {leftCoverData} from '../data/HomePage/leftCoverData'

function Home() {
  
  return (
    <div>    

      {/* //Home page after login and signup */}
      <div className='flex flex-col  justify-center items-center'>

        {/* top nav bar */}
        <nav className='w-full flex justify-between mt-3 ' >
          {/* left part */}
          <div className=' flex gap-4 ml-5'>
            <div className='text-2xl'>
              Medium
            </div>
            <div className=' rounded-3xl flex gap-3 justify-center bg-slate-100 items-center'>
              <div className='ml-2'> <CiSearch  className='h-6 w-6'/> </div>
              <div>
                <input type='text' placeholder='Search' className='focus:outline-none bg-slate-100'/>
              </div>
            </div>

          </div>

          {/* right part */}
          <div className='flex gap-7 justify-center items-center mr-5'>
            <Link to={"/write-post"}>
              <div className='flex gap-2 justify-center items-center text-gray-400 hover:text-gray-600 hover:cursor-pointer'>
                  <TfiPencilAlt className='h-6 w-6 '/> 
                  Write
              </div>
            </Link>
            <Link to={"/notifications"}>
              <div className='text-gray-400 hover:text-gray-600 hover:cursor-pointer'>
                <IoMdNotificationsOutline  className='h-6 w-6'/>
              </div>
            </Link>
            <Link to={"/profile"}>
              <div className= ''>
                Profile
              </div>
            </Link>
          </div>
        </nav>

        <div className='flex w-9/12 min-h-screen border-green-700 border  mt-5 justify-between'>

          {/* left container */}
          <div className='w-[60%] justify-between '>
            {/* sub nav bar */}
            <nav className='flex gap-7 items-center border-gray-200 border-b mt-4 spacing-class pb-5 sticky top-0 bg-white z-10'>
              <Link to={"/plus"}>
                <AiOutlinePlus className='h-6 w-6'/>
              </Link>

              <Link to={"/for-you"}>For you</Link>
              <Link to={"/following"}>Following</Link>
              <Link to={"/books"}>Books</Link>
              <Link to={"/scoial-media"}>Social Media</Link>
              <Link to={"/leadership"}>Leadership</Link>
              <Link to={"/machine-learning"}>Machine Learning</Link>
              {/* <Link to={"/science"}>Science</Link> */}

              <div>
                <IoChevronForward />
              </div>
            </nav>

            {/* posts */}
            <div>
              {
                postsData.map( (post) => {

                  return (<PostPreview key={post.id}
                    userName={post.userName}
                    title={post.title}
                    postText={post.postText}
                    postImg={post.postImg}
                    createdAt={post.createdAt}
                    claps={post.claps}
                    comments={post.comments}
                    />
                  )
                })
              }
            </div>
  
          </div>
          
          {/* right container */}
          <div className='w-[30%] border-blue-800 border-l'> 
              {
                leftCoverData.map( (data, index) => {
                  return(
                    <LeftCover key={data.id}
                    coverdata={index}
                    title={data.title}
                    linkto={data.linkto}
                    text={data.text}
                  />
                  )
                })
              }
            {/* <div className='ml-10'>
              <p>Staff Picks</p>

              <div>
                {
                  staffPicks.map((post) =>{
                    return(
                      <StaffPicks key={post.id}
                        title={post.title}
                        profile={post.postImg}
                        userName={post.userName}
                      />
                    )
                  })
                }
              </div>
              <Link to={"/staff-full-list"}>
                <p className='text-green-600 mt-4'>See the full list</p>
              </Link>  

            </div> */}
          </div>  
        </div>  

      </div>
    </div>
  )
}

export default Home




{/* Home page before login and sign up */}
      
// {/* <div className='body-color w-full h-full flex  justify-center relative'>
// {/* header */}

// <div className=' w-full border-black border-b absolute mt-[4.5rem]'>

// </div>

// <div className=' w-full border-black border-b absolute  mt-[42rem]'>

// </div>

// <div className='flex flex-col nav-bord w-9/12 p-2 ml-4 mr-4'>

//   <nav className='flex  justify-between items-center'>

//     <div className="logo text-black ">  
//       Medium
//     </div>

//     <div className="flex gap-4 items-center">
      
//       <Link to={"/our-story"}>
//         <div className=''>
//           Our story
//         </div>
//       </Link>
//       <Link to={"/membership"}>
//         <div className=''>
//         Membership
//         </div>
//       </Link>
      
//       <Link to={"/signup"}>
//         <div className=''>
//           Write
//         </div>
//       </Link>
//       <Link to={"/signin"}>
//         <div className=''>
//           Sign in
//         </div>
//       </Link>

//       <div>
//         <StartButton active={true} longBtn={false} linkto={"/signup"}>
//           Get Started
//         </StartButton>
//       </div>
  

//     </div>
//   </nav>
  

//   {/* Main container */}
//   <div className='w-full  min-h-[35rem] flex flex-col justify-center mt-1'> 
//     <h2 className=' human-font'>
//       Human 
//       <br/>
//       stories & ideas
//     </h2>
//     <div className='spacing-class text-[22px] mt-10 mb-10 font-sans font-normal '>
//       A place to read, write, and deepen your understanding
//     </div>
//     <StartButton active={true} longBtn={true} linkto={"/signup"}>
//       Start Reading
//     </StartButton>

//   </div>

//   {/* footer */}
//   <div className='flex items-center justify-center mt-14 mb-8'>
//     <ul className='flex gap-3 '>
//       <li>Help</li>
//       <li>Status</li>
//       <li>About</li>
//       <li>Creers</li>
//       <li>Press</li>
//       <li>Blog</li>
//       <li>Privacy</li>
//       <li>Terms</li>
//       <li>Text to speech</li>
//       <li>Teams</li>
//     </ul>
//   </div>
// </div>


// </div>  */}