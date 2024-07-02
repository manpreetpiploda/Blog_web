import React from 'react'
import { Link } from 'react-router-dom';

function StartButton({children, longBtn, active, linkto}) {
  return (
    <Link to={linkto}>
        <button className={`text-center rounded-3xl font-semibold  text-white ${ active ? "bg-black" : "bg-green-500"}   ${longBtn ? "p-2 pl-12 pr-12 text-[18px]" : "p-2 pl-4 pr-4"}`} >
            {children}
        </button>
    </Link>
  )
}

export default StartButton;