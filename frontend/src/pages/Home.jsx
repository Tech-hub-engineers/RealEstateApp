import React from 'react'
import '../assets/styles.css'
import logo from '../assets/images/logo_sewo.png'
import Search_bar from '../components/home_page/Search_bar'
import Profile_and_notification from '../components/home_page/Profile_and_notification'
import Side_menu from '../components/home_page/Side_menu'
import Logout from '../components/home_page/Logout'

const Home = () => {
  return (
    <div className="min-h-screen flex gap-1 bg-gray-200">
      
      <div className="flex flex-col p-4 justify-between gap-9 shadow-md bg-white min-h-max">
        <div className='flex flex-col gap-16'>
        <img src={logo} alt="Sewo Logo" className="w-32 object-cover self-center" />
        <Side_menu />
        </div>
        <Logout />
      </div>
      
      <div className="flex justify-between h-min items-center w-full shadow-md bg-white px-5 py-2">
        <Search_bar />
        <Profile_and_notification />
      </div>
      
    </div>
  );
};

export default Home;
