import React from 'react';
import NavBar from '../../components/Header/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import BarChart from '../../components/Charts/SubscriptionChart/BarChart';
import free from '../../assets/svg/free.svg';
import plus from '../../assets/svg/plus.svg';
import premium from '../../assets/svg/premium.svg';
import all from '../../assets/svg/all.svg';

const Subscription = () => (
  <div className="">
    <div className=''>
        <NavBar title="Subscription"  />
    </div>
    
    <div className='w-full min-h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[14rem_1fr] items-stretch'>
        <Sidebar />
        <div className='w-[705px] mx-auto h-screen my-10'>
            <div className='border border-white p-5 shadow-md rounded-lg'>
                <BarChart />
            </div>
            <div className='w-[30rem] text-center mx-auto border border-white p-5 shadow-md rounded-lg mt-6'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <span>
                            <img src={free} alt="free" />
                        </span>
                        <h4 className='text-[14px] text-[#212121] ml-1'>Total Number of Subscribers <span className='font-bold text-[14px] text-[#212121]'>(Free):</span></h4>
                    </div>
                    <p className='text-sm'>
                        12,563
                        <span className='text-[#615E83] text-sm ml-1'>Subscribers</span>
                    </p>
                </div>
                <div className='flex justify-between items-center mt-6'>
                    <div className='flex items-center'>
                        <span>
                            <img src={premium} alt="free" />
                        </span>
                        <h4 className='text-[14px] text-[#212121] ml-1'>Total Number of Subscribers <span className='font-bold text-[14px] text-[#212121]'>(Premium):</span></h4>
                    </div>
                    <p className='text-sm'>
                        12,563
                        <span className='text-[#615E83] text-sm ml-1'>Subscribers</span>
                    </p>
                </div>
                <div className='flex justify-between items-center mt-6'>
                    <div className='flex items-center'>
                        <span>
                            <img src={plus} alt="free" />
                        </span>
                        <h4 className='text-[14px] text-[#212121] ml-1'>Total Number of Subscribers <span className='font-bold text-[14px] text-[#212121]'>(Plus):</span></h4>
                    </div>
                    <p className='text-sm'>
                        12,563
                        <span className='text-[#615E83] text-sm ml-1'>Subscribers</span>
                    </p>
                </div>
                <div className='flex justify-between items-center mt-6'>
                    <div className='flex items-center'>
                        <span className='text-justify'>
                            <img src={all} alt="free" />
                        </span>
                        <h4 className='text-base text-[#212121] font-bold ml-1'>Total Number of Subscribers:</h4>
                    </div>
                    <p className='text-sm'>
                        12,563
                        <span className='text-[#615E83] text-sm ml-1'>Subscribers</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
);
export default Subscription;
