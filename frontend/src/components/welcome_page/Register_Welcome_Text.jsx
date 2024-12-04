import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles.css';
import { Link } from 'react-router-dom';

const Register_Welcome_Text = () => {
  const [formData, setFormData] = useState({
    fname: '',
    origin: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/user/', {
        fullname: formData.fname,
        origin: formData.origin,
        email: formData.email,
        password: formData.password,
      });
    
      setMessage(response.data.message);
      navigate('/');
    
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('Email already registered');
      } else {
        setError('There was an error with the registration.');
      }
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