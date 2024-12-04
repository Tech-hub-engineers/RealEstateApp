import React from 'react'
import { IoNotifications } from "react-icons/io5";
import {Link} from "react-router-dom";
import profileimg from '../../assets/images/profileimg2.png';

const Profile_and_notification = () => {
  return (
    <div className='flex items-center gap-4'>
        <Link className='cursor-pointer'><IoNotifications className='text-lg'/></Link>
        <img src={profileimg} className='w-8 h-8 rounded-full object-cover'/>
    </div>
  )
}

export default Profile_and_notification