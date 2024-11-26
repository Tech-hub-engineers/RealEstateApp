import React from 'react'
import Login_Navbar from '../components/welcome_page/Login_Navbar';
import Login_Slide_Images from '../components/welcome_page/Login_Slide_Images';
import Forgot_Pswd from '../components/welcome_page/Forgot_Pswd';
import '../assets/styles.css';

const ForgotPasswordPage = () => {
  return (
    <section
    style={{
        background: "linear-gradient(to right, #fafafa 50%, #ffffff 50%)",
      }}
    >
    <Login_Navbar text="Login"/>
        <div className='grid grid-cols-2'>
        <Login_Slide_Images/>
        <Forgot_Pswd/>
        </div>
    </section>
  )
}

export default ForgotPasswordPage