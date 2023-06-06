import React from 'react';
import NavBar from '../../components/Header/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import ReportData from '../../components/Table/ReportData';


const Reports = () => (
  <div className="">
    <div className=''>
        <NavBar title="Reports"  />
    </div>
    
    <div className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-[14rem_1fr] items-stretch'>
        <Sidebar />
        <div className='w-full h-screen'>
            <ReportData />
        </div>
    </div>
  </div>
);
export default Reports;
