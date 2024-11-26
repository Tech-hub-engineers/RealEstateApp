import React from 'react'
import "../../assets/styles.css"
import {Link} from 'react-router-dom'
import { IoChevronDown } from "react-icons/io5";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdFilterList } from "react-icons/md";



const Search_filter = () => {
  return (
    <div className='flex font-comic justify-between items-center'>
    <div className='flex items-center gap-12'>
        <div className='flex items-center gap-2'>
            <div className='border-[1px] border-blue-950 p-[7px] rounded-lg text-blue-950 shadow-md'>
                <BiSolidBuildingHouse />
            </div>
            <div className='flex gap-2 items-center justify-between border-[1px] border-blue-950 py-1 px-2 rounded-lg'>
                <p className='text-sm font-semibold text-blue-950 '>Rent a Building</p>
                <IoChevronDown />
            </div>
        </div>

        <div className='flex items-center gap-2'>
            <div className='border-[1px] border-blue-950 p-[7px] rounded-lg text-blue-950 shadow-md'>
                <FaCalendarDays/>
            </div>
            <div className='flex gap-16 items-center justify-between border-[1px] border-blue-950 py-1 px-2 rounded-lg'>
                <p className='text-sm font-semibold text-gray-400 '>Date</p>
                <IoChevronDown />
            </div>
        </div>

        <div className='flex items-center gap-2'>
            <div className='border-[1px] border-blue-950 p-[7px] rounded-lg text-blue-950 shadow-md'>
                <FaLocationDot />
            </div>
            <div className='flex gap-16 items-center justify-between border-[1px] border-blue-950 py-1 px-2 rounded-lg'>
                <p className='text-sm font-semibold text-gray-400 '>Location</p>
                <IoChevronDown />
            </div>
        </div>

        <Link className='py-1 w-[100px] text-center text-white bg-blue-600 rounded-lg text-sm'>Search</Link>
    </div>

    <div className='border-[1px] border-blue-950 p-[7px] rounded-lg text-blue-950 shadow-md'>
        <MdFilterList />
    </div>
</div>

  )
}

export default Search_filter