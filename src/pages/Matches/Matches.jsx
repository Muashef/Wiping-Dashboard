import React from 'react';
import Profile from '../../assets/svg/profile.svg';
import NavBar from '../../components/Header/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';


const Matches = () => (
  <div className="">
    <div className=''>
        <NavBar title="Matches"  />
    </div>
    
    <div className='w-full h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[13rem_1fr] items-stretch'>
        <Sidebar />
        <div className='w-full h-[25.125rem] mx-auto px-56 gap-14 mt-24 grid grid-cols-1 lg:grid-cols-2 items-center justify-center'>
            <div className=' bg-white p-6 shadow-md rounded-md w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold border-b-2 w-1/3 h-7'>Accepted</h1>
                <div className='flex justify-between mt-4'>
                    <div>
                    <p className='text-[#9E9E9E] text-sm'>Everyday</p>
                    <p className='text-[#2F80ED] font-bold'>4,000</p>
                    </div>
                    <div>
                        <img src={ Profile } alt="profile" />
                    </div>
                </div>
                
            </div>

            <div className=' bg-white p-6 shadow-md rounded-md w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold border-b-2 w-1/3 h-7'>Rejected</h1>
                <div className='flex justify-between mt-4'>
                    <div>
                    <p className='text-[#9E9E9E] text-sm'>Everyday</p>
                    <p className='text-[#2F80ED] font-bold'>4,000</p>
                    </div>
                    <div>
                        <img src={ Profile } alt="profile" />
                    </div>
                </div>
                
            </div>

            <div className=' bg-white p-6 shadow-md rounded-md w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold border-b-2 w-1/3 h-7'>Pending</h1>
                <div className='flex justify-between mt-4'>
                    <div>
                    <p className='text-[#9E9E9E] text-sm'>Everyday</p>
                    <p className='text-[#2F80ED] font-bold'>4,000</p>
                    </div>
                    <div>
                        <img src={ Profile } alt="profile" />
                    </div>
                </div>
                
            </div>

            <div className=' bg-white p-6 shadow-md rounded-md w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold border-b-2 w-1/3 h-7'>Rejected</h1>
                <div className='flex justify-between mt-4'>
                    <div>
                    <p className='text-[#9E9E9E] text-sm'>Everyday</p>
                    <p className='text-[#2F80ED] font-bold'>4,000</p>
                    </div>
                    <div>
                        <img src={ Profile } alt="profile" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  </div>
);
export default Matches;
