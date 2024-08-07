import React from 'react';
import NavBar from '../../components/Header/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import SettingsData from '../../components/Table/SettingsData';
import InviteModal from '../../components/Modal/InviteModal';
import RevokeInvite from '../../components/Modal/RevokeInvite';
import ResendInvite from '../../components/Modal/ResendInvite';

const Settings = () => (
    
  <div className="">
    <div className=''>
        <NavBar title="Settings" showMode={true} />
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
                        <div className='flex items-center gap-1 ml-12'>
                            <ResendInvite />
                            <RevokeInvite />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-6'>
                        <div>
                            <h3 className='text-[#757575] text-base font-bold'>Davidadeleke007@gmail.com</h3>
                        </div>
                        <div className='flex items-center gap-1 ml-12'>
                            <ResendInvite />
                            <RevokeInvite />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-6'>
                        <div>
                            <h3 className='text-[#757575] text-base font-bold'>Davidadeleke007@gmail.com</h3>
                        </div>
                        <div className='flex items-center gap-1 ml-12'>
                            <ResendInvite />
                            <RevokeInvite />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  </div>
);

export default Settings;