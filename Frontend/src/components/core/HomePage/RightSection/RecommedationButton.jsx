import React from 'react'
import { recomendationButtonData } from '../../../../data/HomePage/RecomendationButtonData'
import RecomBtn from './RecomBtn'
function RecommedationButton() {
  return (
    <div className='flex flex-wrap gap-2'>
        {
            recomendationButtonData.map( (data) =>{
                // { console.log("text", data.id) }
                return(
                    
                    <RecomBtn key={data.id}
                        text={data.title}
                    />
                )
            })
        }
    </div>
  )
}

export default RecommedationButton