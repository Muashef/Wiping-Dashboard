import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { TiArrowSortedDown } from 'react-icons/ti';
import navLogo from "../../assets/svg/nav-logo.svg";

const NavBar = ({title}) => {
  return (
    <div className='w-full flex items-center justify-between px-8 py-5'>
        <div>
            <img src={navLogo} alt="" />
        </div>
        <div>
            <h2 className='text-[#2F80ED] text-xl font-bold'>{title}</h2>
        </div>
    </div>
  )
}



export default NavBar