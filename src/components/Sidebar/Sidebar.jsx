import React, { useState } from 'react';
import Home from '../../assets/svg/home.svg';
import Matches from '../../assets/svg/matches.svg';
import Mgt from '../../assets/svg/mgt.svg';
import Online from '../../assets/svg/online.svg';
import Report from '../../assets/svg/reports.svg';
import settings from '../../assets/svg/setting.svg'
import { Link, useLocation } from 'react-router-dom';
import subs from '../../assets/svg/subs.svg';
import user from '../../assets/svg/user.svg';
import logout from '../../assets/svg/logout.svg';
import LogoutModal from '../Modal/LogoutModal';

const Sidebar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      setIsModalOpen(false);
    };

  return (
    <div className='w-full lg:w-[72] lg:h-screen grid lg:grid-cols-[272px_1fr] gap-0 text-white'>
        <aside className="lg:w-[12.625rem] h-[60.25rem]  bg-blue text-white py-[2.375rem] px-3 hidden lg:flex flex-col items-center gap-8 justify-between rounded-tr-md">
            <div className="aside-top w-[135px]">
                    <div className=' text-white'>
                        <h2 className='font-bold text-lg'>Jane Doe</h2>
                        <p className='text-sm'>Product manager</p>
                    </div>

                    <nav className="mt-16 ">
                        <ul className="w-full flex flex-col gap-8">
                        <li>
                            <Link to="/home" className={`w-fit flex items-center gap-2 bg-transparent ${location.pathname === '/home' ? ' text-3xl font-bold' : ''}`}>
                            <img src={Home} alt="" className="w-[1.125rem] mr-1" />
                            <span className="text-[0.875rem] leading-[120%]">Home</span>
                            </Link>
                        </li>
                            <li>
                                <Link to='/customer-mgt' className={`w-fit flex items-center gap-2 bg-transparent ${location.pathname === '/customer-mgt' ? 'text-3xl font-bold' : ''}`}>
                                    <img src={Mgt} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Customer Mgt</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/subscription' className={`w-fit flex items-center gap-2 bg-transparent ${location.pathname === '/subscription' ? 'text-3xl font-bold' : ''}`}>
                                    <img src={subs} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Subscription</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/matches' className={`w-fit flex items-center gap-2 bg-transparent ${location.pathname === '/matches' ? 'text-3xl font-bold' : ''}`}>
                                    <img src={Matches} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Matches</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/user-analytics' className={`w-fit flex items-center gap-2 bg-transparent ${location.pathname === '/user-analytics' ? 'text-3xl font-bold' : ''}`}>
                                    <img src={user} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">User Analytics</span>
                                </Link>
                            </li>

                            <li>
                                <Link to='/online' className={`w-fit flex items-center gap-2 bg-transparent ${location.pathname === '/online' ? 'text-3xl font-bold' : ''}`}>
                                    <img src={Online} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Online</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reports' className={`w-fit flex items-center gap-2 bg-transparent ${location.pathname === '/reports' ? 'text-3xl font-bold' : ''}`}>
                                    <img src={Report} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Reports</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/settings' className={`w-fit flex items-center gap-2 bg-transparent ${location.pathname === '/settings' ? 'text-3xl font-bold' : ''}`}>
                                    <img src={settings} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Settings</span>
                                </Link>
                            </li>
                            <li>
                                <div className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={logout} alt="" className="w-[1.125rem] mr-1" />
                                    <button onClick={() => setIsModalOpen(true)} className="text-[0.875rem] leading-[120%]">Logout</button>
                                    <LogoutModal
                                        isOpen={isModalOpen}
                                        onClose={() => setIsModalOpen(false)}
                                        onLogout={handleLogout}
                                    />
                                </div>
                            </li>
                        </ul>
                    </nav>
            </div>
        </aside>
    </div>
  ) 
}

export default Sidebar