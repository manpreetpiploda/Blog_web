import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import StartButton from '../components/core/HomePage/StartButton'
import greenImage from "../assets/images/green.webp"


function Home() {
  return (
    <div className='body-color w-full h-full flex  justify-center relative'>
        {/* header */}

        <div className=' w-full border-black border-b absolute mt-[4.5rem]'>

        </div>

        <div className=' w-full border-black border-b absolute  mt-[42rem]'>

        </div>

        <div className='flex flex-col nav-bord w-9/12 p-2 ml-4 mr-4'>

          <nav className='flex  justify-between items-center'>

            <div className="logo text-black ">  
              Medium
            </div>

            <div className="flex gap-4 items-center">
              
              <Link to={"/our-story"}>
                <div className=''>
                  Our story
                </div>
              </Link>
              <Link to={"/membership"}>
                <div className=''>
                Membership
                </div>
              </Link>
              
              <Link to={"/signup"}>
                <div className=''>
                  Write
                </div>
              </Link>
              <Link to={"/signin"}>
                <div className=''>
                  Sign in
                </div>
              </Link>

              <div>
                <StartButton active={true} longBtn={false} linkto={"/signup"}>
                  Get Started
                </StartButton>
              </div>
          

            </div>
          </nav>
          

          {/* Main container */}
          <div className='w-full  min-h-[35rem] flex flex-col justify-center mt-1'> 
            <h2 className=' human-font'>
              Human 
              <br/>
              stories & ideas
            </h2>
            <div className='spacing-class text-[22px] mt-10 mb-10 font-sans font-normal '>
              A place to read, write, and deepen your understanding
            </div>
            <StartButton active={true} longBtn={true} linkto={"/signup"}>
              Start Reading
            </StartButton>
      
          </div>

          {/* footer */}
          <div className='flex items-center justify-center mt-14 mb-8'>
            <ul className='flex gap-3 '>
              <li>Help</li>
              <li>Status</li>
              <li>About</li>
              <li>Creers</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Text to speech</li>
              <li>Teams</li>
            </ul>
          </div>
        </div>


    </div>
  )
}

export default Home