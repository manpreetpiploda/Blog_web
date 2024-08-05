import React from 'react'
import StaffPicks from './StaffPicks'
import { staffPicks } from '../../../data/postData'

import { Link } from 'react-router-dom'
import RecommedationButton from './RightSection/RecommedationButton'
import WhotoFollow from './RightSection/WhotoFollow'
import { postsData } from '../../../data/postData'

function LeftCover({title, linkto,text, coverdata }) {
  return (
    <div className='ml-10 mb-4 mt-4'>
        <p>{title}</p>
        <div>
            {/* {console.log("coverdata ", coverdata) } */}
            {
                coverdata===0 ? (
                    staffPicks.map((post) =>{
                        return  (
                            <StaffPicks 
                                key={post.id}
                                title={post.title}
                                profile={post.postImg}
                                userName={post.userName}
                            />
                        )
                    })    
                ) : (
                    coverdata==1 ? (
                      <RecommedationButton/>
                    ) : (
                      // <div> adad</div>
                      staffPicks.map((post) =>{
                        return  (
                            <WhotoFollow 
                                key={post.id}
                                description={post.title}
                                profileImage={post.postImg}
                                userName={post.userName}
                            />
                        )
                    })

                    )
                )
            }
                
              </div>
              <Link to={linkto}>
                <p className='text-green-600 mt-4 mb-6'>{text}</p>
              </Link>  
    </div>
  )
}

export default LeftCover
