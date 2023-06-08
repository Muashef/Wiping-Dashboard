import React from 'react';
import Profile from '../../assets/svg/profile.svg';
import total from '../../assets/svg/total.svg';
import active from '../../assets/svg/active.svg';
import inactive from '../../assets/svg/inactive.svg';
import NavBar from '../../components/Header/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import woman from '../../assets/svg/woman.svg';
import man from '../../assets/svg/man.svg';


const UserAnalytics = () => (
  <div className="">
    <div className=''>
        <NavBar title="User Analytics"  />
    </div>
    
    <div className='w-full h-screen grid grid-cols-1 lg:grid-cols-[13rem_1fr] items-stretch'>
        <Sidebar />
        <div className=' grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-10 mx-auto'>
            <div className=' bg-[#1EA7FF] p-6 shadow-md rounded-md w-[40.798125rem] h-[11.7225rem] mb-5'>
                <h1 className='text-white font-bold text-[1.20rem]'>Female Users</h1>
                <div className='border-b-2 w-40 h-2'></div>
                <div className='flex items-center justify-between mt-4'>
                    <div>
                    <p className='text-white text-[1.35rem]'>17,000</p>
                    </div>
                    <div className='bg-white p-4 rounded-full w-24'>
                        <img className='w-full' src={ woman } alt="profile" />
                    </div>
                </div>
                
            </div>
            <div className=' bg-white p-6 shadow-md rounded-md ml-40 w-[21.60625rem] mb-5'>
                <h1 className='text-[#232360] font-bold text-xl'>Total Users</h1>
                <div className='border-b-2 w-40 h-2'></div>
                <div className='flex items-center justify-between mt-10'>
                    <div>
                    <p className='text-[#2F80ED] font-bold'>86,000</p>
                    </div>
                    <div>
                        <img src={ total } alt="total-users" />
                    </div>
                </div>
                
            </div>
            <div className=' bg-[#2F80ED] p-6 shadow-md rounded-md w-[40.798125rem] h-[11.7225rem] mb-4'>
                <h1 className='text-white font-bold text-[1.20rem]'>Male Users</h1>
                <div className='border-b-2 w-40 h-2'></div>
                <div className='flex items-center justify-between mt-4'>
                    <div>
                    <p className='text-white text-[1.35rem]'>30,000</p>
                    </div>
                    <div className='bg-white p-4 w-24 rounded-full'>
                        <img className='w-full' src={ man } alt="profile" />
                    </div>
                </div>
                
            </div>
            <div className=' bg-white p-6 shadow-md rounded-md ml-40 w-[21.60625rem] mb-5'>
                <h1 className='text-[#232360] font-bold text-xl'>Active Users</h1>
                <div className='border-b-2 w-40 h-2'></div>
                <div className='flex items-center justify-between mt-10'>
                    <div>
                    <p className='text-[#2F80ED] font-bold'>39,000</p>
                    </div>
                    <div>
                        <img src={ active } alt="active" />
                    </div>
                </div>
                
            </div>
            <div className=' bg-white p-6 shadow-md rounded-md w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold text-xl'>Rejected</h1>
                <div className='border-b-2 w-32 h-2'></div>
                <div className='flex items-center justify-between mt-10'>
                    <div>
                    <p className='text-[#2F80ED] font-bold'>4,000</p>
                    </div>
                    <div>
                        <img src={ Profile } alt="profile" />
                    </div>
                </div>
                
            </div>
            <div className=' bg-white p-6 shadow-md rounded-md ml-40 w-[21.60625rem]'>
                <h1 className='text-[#232360] text-xl font-bold '>Inactive Users</h1>
                <div className='border-b-2 w-40 h-2'></div>
                <div className='flex items-center justify-between mt-8'>
                    <div>
                    <p className='text-[#2F80ED] font-bold'>47,000</p>
                    </div>
                    <div>
                        <img src={ inactive } alt="inactive" />
                    </div>
                </div>
                
            </div>
            <div className=' bg-white p-6 shadow-md rounded-md mt-12 w-[21.60625rem]'>
                <h1 className='text-[#232360] text-xl font-bold '>Ages</h1>
                <div className='border-b-2 w-24 h-2'></div>
                <div className='flex items-center justify-between mt-8'>
                    <div>
                        <p className='text-[#2F80ED] font-bold text-[0.744375rem] mb-2'>47,000</p>
                        <p className='text-[0.744375rem] text-[#828282] font-semibold'>18-24</p>
                    </div>
                    <div>
                        <p className='text-[#2F80ED] font-bold text-[0.744375rem] mb-2'>47,000</p>
                        <p className='text-[0.744375rem] text-[#828282] font-semibold'>25-34</p>
                    </div>
                    <div>
                        <p className='text-[#2F80ED] font-bold text-[0.744375rem] mb-2'>47,000</p>
                        <p className='text-[0.744375rem] text-[#828282] font-semibold'>35-44</p>
                    </div>
                    <div>
                        <p className='text-[#2F80ED] font-bold text-[0.744375rem] mb-2'>47,000</p>
                        <p className='text-[0.744375rem] text-[#828282] font-semibold'>45-84</p>
                    </div>
                    <div>
                        <p className='text-[#2F80ED] font-bold text-[0.744375rem] mb-2'>47,000</p>
                        <p className='text-[0.744375rem] text-[#828282] font-semibold text-center'>85+</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  </div>
);
export default UserAnalytics;
