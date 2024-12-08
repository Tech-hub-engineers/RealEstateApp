import React from 'react'
import '../assets/styles.css'
import logo from '../assets/images/logo_sewo.png'
import Search_bar from '../components/home_page/Search_bar'
import Profile_and_notification from '../components/home_page/Profile_and_notification'
import Side_menu from '../components/home_page/Side_menu'
import Logout from '../components/home_page/Logout'
import Search_filter from '../components/home_page/Search_filter'
import Search_Card from '../components/home_page/Search_Card'
import Popular_filter from '../components/home_page/Popular_filter'
import Popular_card from '../components/home_page/Popular_card'

const Home = () => {
  return (
    <div className="min-h-screen flex gap-1 bg-gray-200 font-comic">
      
      <div className="flex flex-col p-4 justify-between gap-9 shadow-md bg-white min-h-max">
        <div className='flex flex-col gap-16'>
        <img src={logo} alt="Sewo Logo" className="w-32 object-cover self-center" />
        <Side_menu />
        </div>
        <Logout />
      </div>
      
      <div className='w-full'>
      <div className="flex justify-between h-min items-center shadow-md bg-white px-5 py-2">
        <Search_bar />
        <Profile_and_notification />
      </div>
      <div className='p-5'>
      <h1 className='font-semibold text-2xl mb-3'>Find Your Best Real Estate</h1>
      
      <div className='bg-white py-5 px-7 rounded-lg my-2'>
        <Search_filter/>
        <div>
        <Search_Card/>
        </div>
        </div>

        
      </div>
      <div className='bg-white py-5 px-7 rounded-lg mx-5 my-3'>
        <Popular_filter/>
        <Popular_card/>
      </div>
      </div>


      
    </div>
  );
};

export default Home;
