import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavBar from '../../components/Header/Navbar'
import plus from '../../assets/svg/plus.svg';
import nij1 from '../../assets/svg/nij1.svg';
import nij2 from '../../assets/svg/nij2.svg';
import nij3 from '../../assets/svg/nij3.svg';
import nij4 from '../../assets/svg/nij4.svg';
import nij5 from '../../assets/svg/nij5.svg';
import nij6 from '../../assets/svg/nij6.svg';
import Growth from '../../assets/svg/Growth.svg';
import premium from '../../assets/svg/premium.svg';
import IncomeChart from '../../components/Charts/IncomeChart/IncomeChart';
import PieChart from '../../components/Charts/PieChart/PieChart';
import SemiPieChart from '../../components/Charts/SemiPieChart/SemiPieChart';

const Home = () => {
  return (
    <div >
        <NavBar />
        <div className='w-full h-screen grid grid-cols-1 lg:grid-cols-[13rem_1fr] items-stretch'>
        <Sidebar />
        <div className='grid grid-cols-1 lg:grid-cols-2 px-8'>
            <div className='chart mx-auto border border-white p-5 mb-5 shadow-md rounded-lg w-[20rem] md:w-[40.798125rem]'>
                <IncomeChart />
            </div>
            <div className='user mx-auto bg-white p-6 shadow-md rounded-md lg:ml-40 mb-5 w-[20rem] md:w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold text-sm md:text-xl'>User Analytics</h1>
                <div className='border-b-2 w-full h-2'></div>
                <div className='flex items-center justify-between mt-4'>
                    <div>
                      <p className='text-[#9E9E9E] text-[10px]'>Total Users</p>
                      <p className='text-[#2F80ED] font-bold text-base'>47,000</p>
                    </div>
                    <div>
                      <p className='text-[#9E9E9E] text-[10px]'>Active Users</p>
                      <p className='text-[#2F80ED] font-bold'>39,000</p>
                    </div>
                    <div>
                      <p className='text-[#9E9E9E] text-[10px]'>Inactive Users</p>
                      <p className='text-[#2F80ED] font-bold'>24,000</p>
                    </div>
                </div>
            </div>
            <div className='gender mx-auto border border-[#FAFAFA] p-5 rounded-lg shadow-md mb-5 w-[20rem] md:w-[40.798125rem]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='mr-6'>
                            <h3 className='text-[#1E1B39] text-sm whitespace-nowrap md:text-xl font-bold'>Age and Gender</h3>
                        </div>
                        <div className='flex items-center'>
                            <span className='flex items-center mr-3 text-sm md:text-base'>
                                <img className='mr-1' src={ plus } alt="" />
                                Male
                            </span>
                            <span className='flex items-center text-sm md:text-base'>
                                <img className='mr-1' src={ premium } alt="" />
                                Female
                            </span>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[#615E83] text-[11.28px]'>Total:</h3>
                        <p className='text-[#1E1B39] text-[0.86125rem] font-bold'>31,863</p>
                    </div>
                </div>
                <div className='border-b-2 w-full h-2 mb-5'></div>
                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <p className='whitespace-nowrap mr-3 text[11.28px]'>18-24</p>
                    </div>
                    
                    <div class="h-4 w-full bg-[#F8F8FF] rounded-sm">
                        <div class="h-4 bg-[#DEE1FF] w-20 rounded-md" >
                            <div class="h-4 bg-[#2F80ED] w-12 rounded-md" ></div>
                        </div>
                    </div>
                    <p className='ml-3 text-[11.28px]'>3.3%</p>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <p className='whitespace-nowrap mr-3 text[11.28px]'>25-34</p>
                    <div class="h-4 w-full bg-[#F8F8FF] rounded-sm">
                        <div class="h-4 bg-[#DEE1FF] w-36 rounded-md" >
                            <div class="h-4 bg-[#2F80ED] w-20 rounded-md" ></div>
                        </div>
                    </div>
                    <p className='ml-3 text-[11.28px]'>12.7%</p>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <p className='whitespace-nowrap mr-3 text[11.28px]'>35-44</p>
                    <div class="h-4 w-full bg-[#F8F8FF] rounded-sm">
                        <div class="h-4 bg-[#DEE1FF] w-36 rounded-md" >
                            <div class="h-4 bg-[#2F80ED] w-12 rounded-md" ></div>
                        </div>
                    </div>
                    <p className='ml-3 text-[11.28px]'>15.2%</p>
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <p className='whitespace-nowrap mr-3 text[11.28px]'>45-64</p>
                    <div class="h-4 w-full bg-[#F8F8FF] rounded-sm">
                        <div class="h-4 bg-[#DEE1FF] w-44 md:w-52 rounded-md" >
                            <div class="h-4 bg-[#2F80ED] w-24 rounded-md" ></div>
                        </div>
                    </div>
                    <p className='ml-3 text-[11.28px]'>25.3%</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='whitespace-nowrap mr-4 text[11.28px] text-center'>65+</p>
                    <div class="h-4 w-full bg-[#F8F8FF] rounded-sm">
                        <div class="h-4 bg-[#DEE1FF] w-48 md:w-72 rounded-md" >
                            <div class="h-4 bg-[#2F80ED] w-40 rounded-md" ></div>
                        </div>
                    </div>
                    <p className='ml-3 text-[11.28px]'>33.5%</p>
                </div>  
            </div>
            <div className='visitors mx-auto bg-white p-6 shadow-md rounded-md lg:ml-40 mb-5 w-[20rem] md:w-[21.60625rem]'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[#232360] font-bold text-sm md:text-xl'>Visitors</h1>
                <div>
                  <div>
                    <p className='text-sm md:text-base'>1,253 
                      <span className='text-[#615E83] text-sm ml-1'>users</span>
                    </p>
                  </div>
                  <span className='flex items-center justify-end'>
                    1.3%
                    <img className='ml-1' src={Growth} alt="" />
                  </span>
                </div>
              </div>
                <div className='border-b-2 w-full h-2'></div>
                <div className='flex items-center justify-between mt-4'>
                  <div>
                    <span className='flex items-center text-[#615E83] text-sm'>
                      <img className='mr-1' src={plus} alt="" />
                      IOS
                    </span>
                  </div>
                  <div>
                    <span className='flex items-center text-[#615E83] text-sm'>
                      <img className='mr-1' src={premium} alt="" />
                      Andriod
                    </span>
                  </div>
                </div>
                <div className='chart flex flex-col items-center justify-center w-[278.41px]'>
                  <SemiPieChart />
                </div>
            </div>
            <div className='chart border border-white p-7 mb-5 shadow-md rounded-lg h-[7.75rem] md:h-[261.07px] w-[319.99px]'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[#1E1B39] text-sm md:text-xl  font-bold'>Match</h1>
                <p className='text-[#1E1B39] text-sm md:text-[18.91px] font-bold'>229,293</p>
              </div>
                <PieChart />
            </div>
            <div className='active mx-auto bg-white p-6 shadow-md rounded-md mt-3 md:mt-0 lg:ml-[-12rem] h-[261.07px] w-[20rem] md:w-[47.3125rem] mb-5'>
                <h1 className='text-[#232360] font-bold text-sm md:text-xl'>Demographics</h1>
                <div className='flex flex-col float-right space-y-4 mt-4'>
                    <div className='flex items-center space-x-5'>
                      <div className='flex items-center space-x-4'>
                        <span className='flex items-center text-[#F2C94C] text-[10px]'>
                        <img src={nij1} className='mr-2' alt="" />
                          Nigeria
                        </span>
                        <p className='text-[#9E9E9E] text-[8px]'>40,000 users</p>
                      </div>
                      <div className='flex items-center space-x-4'>
                        <span className='flex items-center text-[#EB5757] text-[10px]'>
                        <img src={nij5} className='mr-2' alt="" />
                          Nigeria
                        </span>
                        <p className='text-[#9E9E9E] text-[8px]'>40,000 users</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                      <div className='flex items-center space-x-4'>
                        <span className='flex items-center text-[#219653] text-[10px]'>
                        <img src={nij2} className='mr-2' alt="" />
                          Nigeria
                        </span>
                        <p className='text-[#9E9E9E] text-[8px]'>40,000 users</p>
                      </div>
                      <div className='flex items-center space-x-4'>
                        <span className='flex items-center text-[#6FCF97] text-[10px]'>
                        <img src={nij6} className='mr-2' alt="" />
                          Nigeria
                        </span>
                        <p className='text-[#9E9E9E] text-[8px]'>40,000 users</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                      <div className='flex items-center space-x-4'>
                        <span className='flex items-center text-[#9B51E0] text-[10px]'>
                        <img src={nij3} className='mr-2' alt="" />
                          Nigeria
                        </span>
                        <p className='text-[#9E9E9E] text-[8px]'>40,000 users</p>
                      </div>
                      <div className='flex items-center space-x-4'>
                        <span className='flex items-center text-[#BB6BD9] text-[10px]'>
                        <img src={nij6} className='mr-2' alt="" />
                          Nigeria
                        </span>
                        <p className='text-[#9E9E9E] text-[8px]'>40,000 users</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                      <div className='flex items-center space-x-4'>
                        <span className='flex items-center text-[#56CCF2] text-[10px]'>
                        <img src={nij4} className='mr-2' alt="" />
                          Nigeria
                        </span>
                        <p className='text-[#9E9E9E] text-[8px]'>40,000 users</p>
                      </div>
                    </div>
                    <div className='py-6 flex flex-col'>
                      <h2 className='text-[#020202] font-bold text-sm md:text-base '>Total Countries: 
                        <span className='text-[#9E9E9E] ml-2'>7</span>
                      </h2>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Home