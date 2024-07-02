import React from 'react'
import { Link } from 'react-router-dom'

function Button({children, active, linkto}) {
  return (
    <Link to={linkto}>
        <div className={`text-center text-white  text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold
          ${ active ? "bg-gray-950": "bg-green-500"}
          hover:scale-95 transition-all duration-200 `}>
          {children}
        </div>
    </Link>
  )
}

export default Button