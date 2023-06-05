import React from 'react';
import NavBar from '../../components/Header/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import TableData from '../../components/Table/TableData';


const CustomerManagement = () => (
  <div className="">
    <div className=''>
        <NavBar title="Customer Management"  />
    </div>
    
    <div className='w-full min-h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[14rem_1fr] items-stretch'>
        <Sidebar />
        <div className='w-full h-screen'>
            <TableData />
        </div>
    </div>
  </div>
);
export default CustomerManagement;
