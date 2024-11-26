import React from 'react';
import home_image_1 from '../../assets/images/home_image_1.jpg';
import home_image_2 from '../../assets/images/home_image_2.jpg';
import home_image_3 from '../../assets/images/home_image_3.jpg';
import '../../assets/styles.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";


const Card = ({ image, title, price, location }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} className='object-cover w-[100%] h-[200px] rounded-md'/>
      <div>
        <div className='flex justify-between'>
          <p>{title}</p>
          <p>{price}</p>
        </div>

        <div className='flex items-center'>
        <FaLocationDot />
          <p className='text-gray-400'>{location}</p>
        </div>

        <div className='flex gap-2'>
          <div className='flex items-center'>
          <IoBed />
            <p>2</p>
          </div>

          <div className='flex items-center'>
          <FaPeopleRoof />
            <p>3</p>
          </div>

          <div className='flex items-center'>
          <GiPathDistance />
            <p>24M</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const Search_Card = () => {
  const card_details = [
    [home_image_1, "Start Sun Hotel & Apartment", "$80", "JI Letda Nasir 45 RT 001/02"],
    [home_image_2, "Start Sun Hotel & Apartment", "$80", "JI Letda Nasir 45 RT 001/02"],
    [home_image_3, "Start Sun Hotel & Apartment", "$80", "JI Letda Nasir 45 RT 001/02"]
  ];

  return (
    <div className='grid grid-cols-3 gap-4 my-8'>
      {card_details.map((card, index) => (
        <Card
          key={index} 
          image={card[0]} 
          title={card[1]} 
          price={card[2]} 
          location={card[3]}
        />
      ))}
    </div>
  );
};

export default Search_Card;
