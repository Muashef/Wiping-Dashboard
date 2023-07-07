import React from 'react';
import Profile from '../../assets/svg/profile.svg';
import NavBar from '../../components/Header/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import AreaChart from '../../components/Charts/OnlineChart/AreaChart';

const Online = () => (
  <div className="">
    <div className=''>
        <NavBar title="Online"  />
    </div>
    
    <div className='w-full h-screen grid grid-cols-1 lg:grid-cols-[13rem_1fr] items-stretch'>
        <Sidebar />
        <div className='h-screen '>
            <div className="flex items-center px-4 space-x-4 mt-6 mb-32 lg:mb-0">
                <label htmlFor="date" className="font-bold text-[#232360] text-sm">Date:</label>
                <div className="flex space-x-2">
                    <input type="number" id="year" placeholder="Day" className="px-2 py-3 border border-gray-300 rounded bg-[#F2F2F2] w-24 outline-none" />
                    <select id="day" className="px-2 py-1 border border-gray-300 rounded bg-[#F2F2F2] outline-none w-24">
                        <option value="">Month</option>
                        <option value="">Jan</option>
                        <option value="">Feb</option>
                        <option value="">Mar</option>
                        <option value="">April</option>
                    </select>
                    <input type="number" id="year" placeholder="Year" className="px-2 py-1 border border-gray-300 rounded bg-[#F2F2F2] w-24 outline-none" />
                </div>
             </div>
            <div className='w-full h-[25.125rem] mx-auto px-8 gap-x-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-[-90px]'>
                <div className=' bg-white p-6 shadow-md mx-auto mb-8 lg:mb-0 rounded-md w-[20rem] lg:w-[21.60625rem]'>
                    <h1 className='text-[#232360]text-sm lg:text-xl font-bold border-b-2 w-1/3 h-7'>D.A.U</h1>
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

                <div className=' bg-white p-6 shadow-md mx-auto mb-10 lg:mb-0 rounded-md w-[20rem] lg:w-[21.60625rem]'>
                    <h1 className='text-[#232360]text-sm lg:text-xl font-bold border-b-2 w-1/3 h-7'>W.A.U</h1>
                    <div className='flex justify-between mt-4'>
                        <div>
                        <p className='text-[#9E9E9E] text-sm'>Every Week</p>
                        <p className='text-[#2F80ED] font-bold'>4,000</p>
                        </div>
                        <div>
                            <img src={ Profile } alt="profile" />
                        </div>
                    </div>
                </div>

                <div className=' bg-white p-6 shadow-md mx-auto rounded-md w-[20rem] lg:w-[21.60625rem]'>
                    <h1 className='text-[#232360] text-sm lg:text-xl font-bold border-b-2 w-1/3 h-7'>M.A.U</h1>
                    <div className='flex justify-between mt-4'>
                        <div>
                        <p className='text-[#9E9E9E] text-sm'>Every Month</p>
                        <p className='text-[#2F80ED] font-bold'>4,000</p>
                        </div>
                        <div>
                            <img src={ Profile } alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[20rem] md:w-[45rem] lg:w-[54.375rem] mx-auto mt-40 lg:mt-[-100px] border border-white p-5 shadow-md rounded-lg'>
                <AreaChart />
            </div>
        </div>
        
    </div>
  </div>
);
export default Online;
