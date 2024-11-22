import React from 'react';
import PropTypes from 'prop-types'; 
import '../assets/styles.css';
import logo from '../assets/images/logo_sewo.png';

const Navbar = ({ text }) => {
  return (
    <nav className="font-comic flex justify-between align-middle py-5 px-10">
      <img src={logo} alt="logo" className="" />
      <p className="text-sm text-blue-950 font-semibold">{text}</p>
    </nav>
  );
};

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Navbar;
