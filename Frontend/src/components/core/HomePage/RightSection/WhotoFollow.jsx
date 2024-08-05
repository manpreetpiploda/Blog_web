import React from 'react'
import FollowButton from '../../../common/FollowButton'

function WhotoFollow({profileImage, userName, description}) {
  return (
    <div className='flex justify-between max-h-[200px] mt-4'>
        <div className='flex gap-2 max-w-[70%]'>
            <div className='rounded-full'>
                <img src={profileImage} alt='img' className='w-8 bg-cover'/>
            </div>
            <div >
                <div className='font-bold'>
                    {userName}
                </div>
                <div className='text-gray-400'>
                    {description}
                </div>
            </div>
        </div>
        <div>
            <FollowButton/>
        </div>
    </div>
  )
}

export default WhotoFollow