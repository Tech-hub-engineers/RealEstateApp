import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Side_menu from '../components/home_page/Side_menu';
import Logout from '../components/home_page/Logout';
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";
import '../assets/styles.css';
import { FaPhone } from "react-icons/fa6";
import Profile_and_notification from '../components/home_page/Profile_and_notification';
import Search_bar from '../components/home_page/Search_bar';
import logo from '../assets/images/logo_sewo.png';
import { FaStar } from "react-icons/fa";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import dimage from '../assets/images/your-marker-icon.png';

const House_Detail = () => {
    const { id } = useParams();
    const [houseDetails, setHouseDetails] = useState(null);
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null); 

    useEffect(() => {
        const fetchHouseDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/housedata/${id}/`);
                console.log('House details:', response.data);
                setHouseDetails(response.data);
            } catch (err) {
                console.error('Error fetching house details', err);
            }
        };

        fetchHouseDetails();
    }, [id]);

    useEffect(() => {
        if (mapRef.current) return;

        if (houseDetails && mapContainerRef.current) {
            mapRef.current = L.map(mapContainerRef.current).setView([41.68, houseDetails.longitude], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);

            L.marker([51.5, -0.09], { icon: new L.Icon({ iconUrl: dimage }) })
                .addTo(mapRef.current)
                .bindPopup('This is the location')
                .openPopup();
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [houseDetails]); 

    if (!houseDetails) {
        return <div>Loading...</div>;
    }

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

                <div className="min-h-screen gap-1 bg-white font-comic border-2 rounded-lg m-3 p-7">
                    <Link to={'/home'} className='flex items-center gap-1 my-2 text-xl'>
                        <MdOutlineKeyboardArrowLeft className='text-xl'/>
                        <p>Details</p>
                    </Link>

                    <div className='grid grid-cols-3 gap-4 mt-5'>
    <div className='col-span-2'>
        {houseDetails?.picture_url && (
            <img
                src={houseDetails.picture_url}
                alt={houseDetails.name}
                className="w-full h-64 object-cover rounded-md mb-4"
            />
        )}
        
        <div className="grid grid-cols-[3fr_1fr] gap-4 w-full">
    <div className="w-full">
        <p>{houseDetails.room_type}</p>
        <h1 className="text-2xl font-semibold mb-4">
            {houseDetails?.name || 'House Name Not Available'}
        </h1>
        <div className='flex items-center text-sm'>
            <FaLocationDot className='text-sm' />
            <p className="text-lg mt-2 text-gray-400 m-1">{houseDetails?.host_location || 'Location Not Available'}</p>
        </div>
    </div>

    <div className="w-full mt-4">
        <div className='text-yellow-400 flex items-center mb-[5%]'>
            {Array.from({ length: houseDetails.review_scores_rating }).map((_, index) => (
                <FaStar key={index} />
            ))}
        </div>
        <p className="text-lg text-sm font-medium mt-5">Price:</p>
        <span className="text-lg font-medium text-blue-600">${houseDetails?.price || 'N/A'}</span>
        <span className='text-gray-400 text-sm font-semibold'>/night</span>
    </div>
</div>


<div className="flex items-center space-x-4">
    <div className="flex flex-row items-center text-lg">
        <IoBed className="mr-1 mt-2" />
        <p className="mt-2">{houseDetails?.bedrooms || 'N/A'}</p>
    </div>

    <div className="flex flex-row items-center text-lg">
        <FaPeopleRoof className="mr-1 mt-2" />
        <p className="mt-2">{houseDetails?.accommodates || 'N/A'}</p>
    </div>
</div>


        <p className="text-lg mt-2 "><strong>Description:</strong> {houseDetails?.description || 'No description available'}</p>
        <p className='mt-3'><strong>Ratings:</strong> {houseDetails.review_scores_rating}/5</p>
    </div>

    <div>
        <div className='border-2 rounded-lg p-3 flex flex-col items-center justify-center'>
            <img className='rounded-lg mb-2 w-[20%] h-[20%]' src={houseDetails.host_picture_url} alt={houseDetails.host_name} />
            <p className='text-center mb-2'>{houseDetails.host_name}</p>
            <div className='flex items-center text-sm mb-2'>
                <FaLocationDot className='text-sm' />
                <p className='text-gray-400 m-1'>{houseDetails.host_location}</p>
            </div>
            <div className='flex items-center gap-4'>
                <Link to={houseDetails.host_url} className='bg-blue-500 text-white text-sm py-2 px-4 rounded-lg hover:underline flex gap-2 items-center'>
                    <RiMessage2Fill />
                    <p>Message</p>
                </Link>

                <Link to={houseDetails.host_url} className='bg-green-500 text-white text-sm py-2 px-8 rounded-lg hover:underline gap-2 flex items-center'>
                    <FaPhone />
                    <p>Call</p>
                </Link>
            </div>
        </div>

        <div className="my-4 border-2 rounded-lg bg-slate-600 p-2" style={{ height: '300px' }} ref={mapContainerRef}></div> 
        <Link to={"/payment"} className='p-2 bg-blue-600 text-white rounded-lg w-[500px]'>
            Book Now
        </Link>
    </div>
</div>

                </div>
            </div>
        </div>
    );
};

export default House_Detail;
