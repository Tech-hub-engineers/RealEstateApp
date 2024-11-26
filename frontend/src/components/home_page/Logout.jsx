import React from 'react'
import { Link } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";

const Logout = () => {
  return (
    <div className='text-sm py-2 pl-2 pr-16 w-min'>
        <Link to={'/'} className='flex items-center gap-2 text-red-600 font-semibold'>
        <IoLogOut className='text-xl transform scale-x-[-1]'/>
        Logout
        </Link>
    </div>
  )
}

export default Logout