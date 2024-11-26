import React, { useState } from 'react';
import '../../assets/styles.css';
import { Link, useNavigate } from 'react-router-dom';

const Register_Welcome_Text = () => {
    const [formData, setFormData] = useState({
        fname: '',
        origin: '',
        email: '',
        password: '',
        remember_me: false,
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fname, origin, email, password, remember_me } = formData;
        const csrfToken = document.cookie.match(/csrftoken=([\w-]+)/)?.[1];
        try {
            const response = await fetch('http://localhost:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify({
                    fname,        
                    origin,        
                    email,       
                    password,     
                    remember_me,  
                }),
                credentials: 'include',
            });

            const data = await response.json(); 

            if (response.ok) {
                setMessage('Account created successfully!'); 
                setError('');
                navigate('/');
            } else {
                setError(data.errors || 'Something went wrong. Please try again - response');
                setMessage('');  
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Something went wrong. Please try again - fetch');
            setMessage('');  
        }
    };

    return (
        <div className="text-base font-comic px-28 pt-12">
            <h1 className="text-blue-900 font-bold text-3xl tracking-wide mb-3">
                Create your Free Account
            </h1>
            <p className="text-gray-400 text-sm mb-3">Submit your data to register</p>

            {message && <div className="text-green-500 mb-2">{message}</div>}
            {error && <div className="text-red-500 mb-2">{error}</div>}

            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="fname" className="text-xs mb-1">Full Name</label>
                <input
                    className="mb-2 border-blue-700 w-[90%] outline-none border-2 py-1 px-2 rounded-md"
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    id="fname"
                />

                <label htmlFor="origin" className="text-xs mb-1">Your Origin</label>
                <input
                    className="mb-2 border-blue-700 w-[90%] outline-none border-2 py-1 px-2 rounded-md"
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    id="origin"
                />

                <label htmlFor="email" className="text-xs mb-1">Your Email</label>
                <input
                    className="mb-2 border-blue-700 w-[90%] outline-none border-2 py-1 px-2 rounded-md"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                />

                <label htmlFor="password" className="text-xs mb-1">Password</label>
                <input
                    className="mb-1 border-blue-700 w-[90%] outline-none border-2 py-1 px-2 rounded-md"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    id="password"
                />

                <div className="justify-between align-middle flex my-2 pr-11 text-sm">
                    <div>
                        <input 
                            required
                            type="checkbox"
                            className="mr-1"
                            name="remember_me"
                            checked={formData.remember_me}
                            onChange={handleChange}
                        />
                        <label htmlFor="remember_me">
                            I agree to Sewo{' '}
                            <a href="#" className="text-blue-900">Security</a> and{' '}
                            <a href="#" className="text-blue-900">Privacy Policy</a>
                        </label>
                    </div>
                </div>

                <button type="submit" className="mt-5 w-[90%] rounded-lg p-2 bg-blue-700 text-white">
                    Get Started
                </button>
            </form>

            <div className="flex justify-self-center text-sm tracking-wide align-middle mt-7">
                <p className="text-gray-500">I have an account?</p>
                <Link to={'/'} className="text-sky-400 ml-1">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Register_Welcome_Text;
