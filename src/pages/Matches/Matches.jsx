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
        <div className='w-full h-auto lg:h-[25.125rem] mx-auto px-8 lg:px-56 gap-14 mt-2 lg:mt-24 grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
            <div className=' bg-white p-6 shadow-md rounded-md mx-auto w-[19rem] md:w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold text-xl'>Accepted</h1>
                <div className='border-b-2 w-32 h-2'></div>
                <div className='flex items-center justify-between mt-4'>
                    <div>
                    <p className='text-[#9E9E9E] text-sm'>Everyday</p>
                    <p className='text-[#2F80ED] font-bold'>4,000</p>
                    </div>
                    <div>
                        <img src={ Profile } alt="profile" />
                    </div>
                </div>
                
            </div>
            <div className=' bg-white p-6 shadow-md rounded-md mx-auto w-[19rem] md:w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold text-xl'>Rejected</h1>
                <div className='border-b-2 w-32 h-2'></div>
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

            <div className=' bg-white p-6 shadow-md rounded-md mx-auto w-[19rem] md:w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold text-xl'>Pending</h1>
                <div className='border-b-2 w-32 h-2'></div>
                <div className='flex items-center justify-between mt-4'>
                    <div>
                    <p className='text-[#9E9E9E] text-sm'>Everyday</p>
                    <p className='text-[#2F80ED] font-bold'>4,000</p>
                    </div>
                    <div>
                        <img src={ Profile } alt="profile" />
                    </div>
                </div>
                
            </div>

            <div className=' bg-white p-6 shadow-md rounded-md mx-auto w-[19rem] md:w-[21.60625rem] mb-15 lg:mb-0'>
                <h1 className='text-[#232360] font-bold text-xl'>Rejected</h1>
                <div className='border-b-2 w-32 h-2'></div>
                <div className='flex items-center justify-between mt-4'>
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
