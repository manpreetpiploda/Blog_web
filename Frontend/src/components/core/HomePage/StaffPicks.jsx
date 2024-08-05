import React from 'react'

function StaffPicks({profile, userName, title}) {
  return (
    <div className='w-full max-h-[100px] border-yellow-700 border mt-4'>
        <div className='flex gap-2 items-center'>
            <div className=' rounded-full '>
                <img src={profile} alt='prof' className='bg-cover h-6 w-6'></img>
            </div>
            {/* <p>{userName}</p> */}
            <div>
                {userName}
            </div>
        </div>
        <p className='text-base font-bold mt-3'>{title}</p>
    </div>
  )
}

export default StaffPicks

