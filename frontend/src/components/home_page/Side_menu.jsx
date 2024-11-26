import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/styles.css'
import { TbLayoutDashboardFilled } from 'react-icons/tb';
import { MdExplore } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { AiFillMessage } from 'react-icons/ai';
import { IoPersonCircleOutline } from 'react-icons/io5';

const SidebarLink = ({ to, children, Icon }) => {
    return (
        <div className='mb-1'>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive
                        ? 'font-semibold text-blue-700 bg-gray-200 flex items-center gap-2 rounded-lg py-2 pl-2 pr-16'
                        : 'font-semibold flex items-center gap-2 rounded-lg py-2 pl-2 pr-16'
                }
            >
                <Icon className='text-2xl' />
                {children}
            </NavLink>
        </div>
    );
};

const Side_menu = () => {
    return (
        <div className='font-comic text-sm w-min'>
            <SidebarLink to='/home' Icon={TbLayoutDashboardFilled}>
                Dashboard
            </SidebarLink>

            <SidebarLink to='/explore' Icon={MdExplore}>
                Explore
            </SidebarLink>

            <SidebarLink to='/my_order' Icon={FaCartShopping}>
                My Order
            </SidebarLink>

            <SidebarLink to='/message' Icon={AiFillMessage}>
                Message
            </SidebarLink>

            <SidebarLink to='/my_profile' Icon={IoPersonCircleOutline}>
                My Profile
            </SidebarLink>
        </div>
    );
};

export default Side_menu;
