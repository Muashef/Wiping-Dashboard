import React from 'react';
import Profile from '../../assets/svg/profile.svg';
import NavBar from '../../components/Header/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import SettingsData from '../../components/Table/SettingsData';
import InviteModal from '../../components/Modal/InviteModal';


const Settings = () => (
  <div className="">
    <div className=''>
        <NavBar title="Settings"  />
    </div>
    
    <div className='w-full h-screen  grid grid-cols-1 lg:grid-cols-[13rem_1fr] items-stretch'>
        <Sidebar />
        <div className='w-full px-8'>
            <InviteModal />
            
            <div className='w-[55.5rem] mx-auto border mt-3 border-[#FAFAFA] p-3 rounded-lg shadow-md'>
                <SettingsData />
            </div>   

            <div className='mt-8'>
                <h3 className='text-[#BDBDBD] text-base font-bold'>Pending Invites</h3>
                <div className='w-[38rem] border mt-3 border-[#FAFAFA] p-3 rounded-lg shadow-md'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-[#757575] text-base font-bold'>Davidadeleke007@gmail.com</h3>
                        </div>
                        <div>
                            <button className='bg-[#828282] rounded-md mr-5 py-2 px-3 text-white'>Resend Invite</button>
                            <button className='bg-[#EB5757] rounded-md py-2 px-3 text-white'>Revoke Invite</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-6'>
                        <div>
                            <h3 className='text-[#757575] text-base font-bold'>Davidadeleke007@gmail.com</h3>
                        </div>
                        <div>
                            <button className='bg-[#828282] rounded-md mr-5 py-2 px-3 text-white'>Resend Invite</button>
                            <button className='bg-[#EB5757] rounded-md py-2 px-3 text-white'>Revoke Invite</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-6'>
                        <div>
                            <h3 className='text-[#757575] text-base font-bold'>Davidadeleke007@gmail.com</h3>
                        </div>
                        <div>
                            <button className='bg-[#828282] rounded-md mr-5 py-2 px-3 text-white'>Resend Invite</button>
                            <button className='bg-[#EB5757] rounded-md py-2 px-3 text-white'>Revoke Invite</button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  </div>
);
export default Settings;
