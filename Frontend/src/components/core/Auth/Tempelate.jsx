import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

function Tempelate({title, description, image, formType}) {
  return (
    <div className='w-full min-h-screen    flex justify-center bg-yellow-500'>
        <div className='w-9/12 flex items-center justify-between border-[3px] border-dark-800'>
            {/* left section */}
            <div className='w-[450px]'>
              <p className='mt-6'>{title}</p>

              <p className='mt-4'>{description}</p>

              { formType==="signup" ? <SignupForm/> : <LoginForm/>}
            </div>

            {/* right section */}
            <div>
                <img src={image} alt="image" height="200px" width="200px"/>
            </div>
        </div>

    </div>
  
  )
}

export default Tempelate