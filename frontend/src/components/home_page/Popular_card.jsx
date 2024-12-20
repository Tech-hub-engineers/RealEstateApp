import React, { useState, useEffect } from 'react';
import '../../assets/styles.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Card = ({ image, title, price, location, bed, accomodates, id }) => {
    return (
        <Link to={`/housedata/${id}`} className="flex gap-3">
            <motion.div
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.3 }}
                className="flex gap-3 cursor-pointer"
            >
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-[50%] h-[200px] rounded-md"
                />
                <div className="mt-2 justify-between items-center">
                    <div>
                        <p className="text-blue-500 bg-slate-200 text-center p-1 m-0 mb-[25%] w-[26%] rounded-lg text-md">${price}</p>
                    </div>
                    <div className="justify-between items-center">
                        <p className="text-base w-[80%]">{title}</p>
                    </div>

                    <div className="flex items-center text-sm">
                        <FaLocationDot className="text-sm" />
                        <p className="text-gray-400 m-1">{location}</p>
                    </div>

                    <div className="flex gap-2 text-sm font-medium">
                        <div className="flex items-center m-1">
                            <IoBed className="mr-1" />
                            <p>{bed}</p>
                        </div>

                        <div className="flex items-center m-1">
                            <FaPeopleRoof className="mr-1" />
                            <p>{accomodates}</p>
                        </div>

                        <div className="flex items-center m-1">
                            <GiPathDistance className="mr-1" />
                            <p>24M</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};


const Popular_card = ({ filter }) => {
    const [houses, setHouses] = useState([]);
    const [randomHouses, setRandomHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                let url = 'http://127.0.0.1:8000/housedata/';

                if (filter === 'recommended') {
                    window.location.reload();
                    url = 'http://127.0.0.1:8000/recommendedhouses/';
                } else if (filter === 'nearest') {
                    url = 'http://127.0.0.1:8000/nearesthouses/';
                }

                const response = await axios.get(url);
                setHouses(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchHouses();
    }, [filter]); 

    useEffect(() => {
        if (houses.length > 0) {
            const randomHouses = [];
            for (let i = 4; i < 8; i++) {
                const randomIndex = Math.floor(Math.random() * houses.length);
                randomHouses.push(houses[randomIndex]);
                houses.splice(randomIndex, 1);
            }
            setRandomHouses(randomHouses);
        }
    }, [houses]);

    return (
        <div className="grid grid-cols-2 gap-8 my-8">
            {randomHouses.map((house, index) => (
                <Card
                    key={index}
                    id={house.id}
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

export default Popular_card;
