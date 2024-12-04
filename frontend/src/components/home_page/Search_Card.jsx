import React, { useState, useEffect } from 'react';
import '../../assets/styles.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FiMessageCircle } from "react-icons/fi";
import { BiBookmarkAlt } from "react-icons/bi";
import { MdInsertLink } from "react-icons/md";
import axios from 'axios';


const Card = ({ image, title, price, location, bed, accomodates, homelink }) => {

  return (
    <div className="relative group">
      <img
        src={image}
        alt={title}
        className='cursor-pointer object-cover w-[100%] h-[200px] rounded-md'
      />


      <div className="mt-2">
        <div className='flex justify-between items-center'>
          <Link to={homelink} className='text-base w-[80%]'>{title}</Link>
          <p className='text-blue-500 bg-slate-200 text-center p-1 m-0 rounded-lg text-md'>${price}</p>
        </div>

        <div className='flex items-center text-sm'>
          <FaLocationDot className='text-sm' />
          <p className='text-gray-400 m-1'>{location}</p>
        </div>

        <div className='flex gap-2 text-sm font-medium'>
          <div className='flex items-center m-1'>
            <IoBed className='mr-1' />
            <p>{bed}</p>
          </div>

          <div className='flex items-center m-1'>
            <FaPeopleRoof className='mr-1' />
            <p>{accomodates}</p>
          </div>

          <div className='flex items-center m-1'>
            <GiPathDistance className='mr-1' />
            <p>24M</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Search_Card = () => {
  const [houses, setHouses] = useState([]);
  const [randomHouses, setRandomHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/housedata/');
        setHouses(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHouses();
  }, []);

  useEffect(() => {
    if (houses.length > 0) {
      const randomThreeHouses = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * houses.length);
        randomThreeHouses.push(houses[randomIndex]);
        houses.splice(randomIndex, 1);
      }
      setRandomHouses(randomThreeHouses);
    }
  }, [houses]);

  return (
    <div className='grid grid-cols-3 gap-4 my-8'>
      {randomHouses.map((house, index) => (
        <Card
          key={index}
          homelink={house.listing_url}
          image={house.picture_url}
          title={house.name}
          price={house.price}
          location={house.host_location}
          bed={house.bedrooms}
          accomodates={house.accommodates}
        />
      ))}
    </div>
  );
};

export default Search_Card;
