import React, { useState, useEffect } from 'react'
import mode from '../../assets/svg/mode.svg';
import darkMode from '../../assets/svg/darkMode.svg';
import navLogo from "../../assets/svg/nav-logo.svg";
import './dark.css';
import SidebarNav from '../Sidebar/SidebarNav';

const NavBar = ({title, showMode}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);


  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='flex items-center justify-between'>
      <div>
        <SidebarNav />
      </div>
      <div className='w-full flex items-center space-x-10 px-8 py-5'>
        <div className='w-32 lg:w-full'>
            <img src={navLogo} alt="" />
        </div>
        <div>
            <h2 className='text-[#2F80ED] text-sm md:text-xl whitespace-nowrap font-bold'>{title}</h2>
        </div>
      </div>
      <div>
        {showMode && (
          <div className='flex items-center space-x-5 px-16'>
            <p className='text-base text-[#2F80ED] whitespace-nowrap font-bold'>
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </p>
            <img
              className='cursor-pointer'
              src={isDarkMode ? darkMode : mode}
              alt=""
              onClick={handleModeToggle}
            />
          </div>
        )}
      </div>
    </div>
  )
}



export default NavBar