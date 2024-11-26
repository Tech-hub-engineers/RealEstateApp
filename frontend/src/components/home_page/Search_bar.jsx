import React from 'react'
import { CiSearch } from "react-icons/ci";
import '../../assets/styles.css';

const search_bar = () => {
  return (
    <div className='font-comic bg-gray-200 gap-1 flex items-center w-min p-2 text-sm rounded-lg'>
        <CiSearch className='text-2xl font-bold text-blue-950'/>
        <input type="text" className='bg-gray-200 w-72 border-none outline-none' placeholder='Search here' />
    </div>
  )
}

export default search_bar