import React, { useState } from 'react';
import '../../assets/styles.css';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookSquare } from 'react-icons/bi';

const getCSRFToken = () => {
  const csrfToken = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('csrftoken='));
  return csrfToken ? csrfToken.split('=')[1] : null;
};

const csrfToken = getCSRFToken();


const Login_Welcome_Text = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember_me, setRemember_me] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/login/',{
                email: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json', 
                    'X-CSRFToken': csrfToken,
                }
            });

            setMessage(response.data.message);
            setError(""); 
      
            window.location.href = '/home';
          } catch (err) {
            setError(err.response ? err.response.data.detail : "Something went wrong");
            setMessage(""); 
          }
    };

    return (
        <div className="text-base font-comic px-28 pt-16">
            <h1 className="text-blue-900 font-bold text-3xl tracking-wide mb-3">Welcome Back to Sewo!</h1>
            <p className="text-gray-400 text-sm mb-4">Sign in to your account</p>

            {message && <div className="text-green-500 mb-4">{message}</div>}
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email" className="text-xs mb-1">Your Email</label>
                <input
                    className="mb-2 border-blue-700 w-[90%] mb-4 outline-none border-2 py-1 px-2 rounded-md"
                    type="email"
                    name="email"
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)} 
                    id="email"
                    required
                />

                <label htmlFor="password" className="text-xs mb-1">Your Password</label>
                <input
                    className="mb-1 border-blue-700 w-[90%] outline-none border-2 py-1 px-2 rounded-md"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    required
                />

                <div className="justify-between align-middle flex my-2 pr-11 text-sm">
                    <div>
                        <input
                            type="checkbox"
                            className="mr-1"
                            name="remember_me"
                            checked={remember_me} 
                            onChange={(e) => setRemember_me(e.target.checked)}  
                        />
                        <label htmlFor="remember_me">Remember Me</label>
                    </div>

                    <div className="text-gray-700">
                        <Link to="/forgotpwd">Forgot Password</Link>
                    </div>
                </div>

                <button type="submit" className="mt-5 w-[90%] rounded-lg p-2 bg-blue-700 text-white">
                    Login
                </button>
            </form>

            <div className="my-5 text-gray-700 flex items-center justify-center">
                <hr className="w-40" />
                <p className="text-center tracking-wide px-1 text-sm">Instant Login</p>
                <hr className="w-40" />
            </div>

            <div className="flex text-gray-700 justify-center gap-3">
                <a href="#" className="p-3 flex items-center justify-center">
                    <FcGoogle className="text-xl" />
                    <p className="ml-2 text-sm tracking-wide text-center">Continue with Google</p>
                </a>

                <a href="#" className="p-3 flex items-center justify-center">
                    <BiLogoFacebookSquare className="text-xl" />
                    <p className="ml-2 text-sm tracking-wide text-center">Continue with Facebook</p>
                </a>
            </div>

            <div className="flex justify-self-center text-sm tracking-wide align-middle mt-10">
                <p className="text-gray-500">Don't have an account?</p>
                <Link to="/register" className="text-sky-400 ml-1">Register</Link>
            </div>
        </div>
    );
};

export default Login_Welcome_Text;
