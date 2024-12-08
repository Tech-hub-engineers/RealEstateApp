import React, { useState } from 'react';
import { PiFunnelFill } from "react-icons/pi";
import Popular_card from './Popular_card';
import { IoChevronDown } from "react-icons/io5";

const TopLink = ({ children, onClick, isActive }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`font-medium flex items-center gap-2 rounded-lg p-2 ${isActive ? 'bg-gray-200 border border-blue-950' : ''}`}
      >
        {children}
      </button>
    </div>
  );
};

const Popular_filter = () => {
  const [activeFilter, setActiveFilter] = useState('popular');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-4 justify-between'>
          <TopLink 
            onClick={() => handleFilterClick('popular')}
            isActive={activeFilter === 'popular'}
          >
            Popular
          </TopLink>
          <TopLink 
            onClick={() => handleFilterClick('recommended')}
            isActive={activeFilter === 'recommended'}
          >
            Recommended
          </TopLink>
          <TopLink 
            onClick={() => handleFilterClick('nearest')}
            isActive={activeFilter === 'nearest'}
          >
            Nearest
          </TopLink>
        </div>

        <div className='flex gap-3'>
          <div className='flex gap-2 items-center justify-between border-[1px] border-blue-950 py-1 px-2 rounded-lg'>
            <p className='text-sm font-semibold text-blue-950'>Most Recent</p>
            <IoChevronDown />
          </div>
          <div className='border-[1px] border-blue-950 p-[7px] rounded-lg text-blue-950 shadow-md'>
            <PiFunnelFill />
          </div>
        </div>
      </div>

      <div className="mt-4">
        {activeFilter === 'popular'}
      </div>
    </div>
  );
};

export default Popular_filter;
