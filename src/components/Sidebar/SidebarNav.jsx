import { useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
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

const SidebarNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsModalOpen(false);
      };
  
    const menuRef = useRef(null)

    const handleClickOutsideMenu = (e) => {
        if (!menuRef.current.contains(e.target)) {
            setMenuIsOpen(false)
        }
    }

    const handleOpenMenu = () => setMenuIsOpen(true)
    const handleCloseMenu = () => setMenuIsOpen(false)
    return (
        <header className="w-full flex lg:hidden relative">
            <section className="w-full py-3 flex justify-end px-5">
                <button onClick={ handleOpenMenu } className="text-[#2E3A59]">
                    <IoMenu className="text-[#2E3A59] text-4xl" />
                </button>
            </section>
            <section onClick={ handleClickOutsideMenu } className={`w-56 h-screen bg-blue fixed top-0 left-0 transition-all duration-300 z-[100]
                ${menuIsOpen ? "translate-x-0" : "translate-x-[-101vw]"}`}
            >
                <section ref={ menuRef } className="w-[300px] h-screen bg-purple text-white py-[1.375rem] px-8 flex flex-col gap-8 justify-between">
                    <div className="aside-top w-full">
                        <div className="float-right">
                            <div className=" flex items-center justify-center gap-2 w-[88px]">
                                {/* <img src={ Logo } alt="" className="w-full" /> */}
                            </div>
                            <div className="w-[20px]">
                                <button onClick={ handleCloseMenu } className="bg-purple">
                                    <IoClose className="text-white text-2xl" />
                                </button>
                            </div>
                        </div>
                        
                       <nav className="mt-16 ">
                        <ul className="w-full flex flex-col gap-8">
                        <li>
                            <Link to="/home" className="w-fit flex items-center gap-2 bg-transparent">
                            <img src={Home} alt="" className="w-[1.125rem] mr-1" />
                            <span className="text-[0.875rem] leading-[120%]">Home</span>
                            </Link>
                        </li>
                            <li>
                                <Link to='/customer-mgt' className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={Mgt} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Customer Mgt</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/subscription' className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={subs} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Subscription</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/matches' className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={Matches} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Matches</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/user-analytics' className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={user} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">User Analytics</span>
                                </Link>
                            </li>

                            <li>
                                <Link to='/online' className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={Online} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Online</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/reports' className="w-fit flex items-center gap-2 bg-transparent">
                                    <img src={Report} alt="" className="w-[1.125rem] mr-1" />
                                    <span className="text-[0.875rem] leading-[120%]">Reports</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/settings' className="w-fit flex items-center gap-2 bg-transparent">
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
                </section>
            </section>    
        </header>
    )
}
export default SidebarNav
