import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavBar from '../../components/Header/Navbar'
import plus from '../../assets/svg/plus.svg';
import active from '../../assets/svg/active.svg';
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
            <div className='chart border border-white p-5 mb-5 shadow-md rounded-lg w-[40.798125rem]'>
                <IncomeChart />
            </div>
            <div className='user bg-white p-6 shadow-md rounded-md ml-40 mb-5 w-[21.60625rem]'>
                <h1 className='text-[#232360] font-bold text-xl'>User Analytics</h1>
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
            <div className='gender border border-[#FAFAFA] p-5 rounded-lg shadow-md mb-5 w-[40.798125rem]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='mr-6'>
                            <h3 className='text-[#1E1B39] text-xl font-bold'>Age and Gender</h3>
                        </div>
                        <div className='flex items-center'>
                            <span className='flex items-center mr-3'>
                                <img className='mr-1' src={ plus } alt="" />
                                Male
                            </span>
                            <span className='flex items-center '>
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
                        <div class="h-4 bg-[#DEE1FF] w-52 rounded-md" >
                            <div class="h-4 bg-[#2F80ED] w-24 rounded-md" ></div>
                        </div>
                    </div>
                    <p className='ml-3 text-[11.28px]'>25.3%</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='whitespace-nowrap mr-4 text[11.28px] text-center'>65+</p>
                    <div class="h-4 w-full bg-[#F8F8FF] rounded-sm">
                        <div class="h-4 bg-[#DEE1FF] w-72 rounded-md" >
                            <div class="h-4 bg-[#2F80ED] w-40 rounded-md" ></div>
                        </div>
                    </div>
                    <p className='ml-3 text-[11.28px]'>33.5%</p>
                </div>  
            </div>
            <div className='visitors bg-white p-6 shadow-md rounded-md ml-40 mb-5 w-[21.60625rem]'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[#232360] font-bold text-xl'>Visitors</h1>
                <div>
                  <div>
                    <p>1,253 
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
            <div className='chart border border-white p-5 mb-5 shadow-md rounded-lg h-[261.07px] w-[319.99px]'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[#1E1B39] text-xl  font-bold'>Match</h1>
                <p className='text-[#1E1B39] text-[18.91px] font-bold'>229,293</p>
              </div>
                <PieChart />
            </div>
            <div className='active bg-white p-6 shadow-md rounded-md ml-[-12rem] h-[261.07px] w-[47.3125rem] mb-5'>
                <h1 className='text-[#232360] font-bold text-xl'>Demographics</h1>
                <div className='flex items-center justify-between mt-10'>
                    <div>
                    <p className='text-[#2F80ED] font-bold'>39,000</p>
                    </div>
                    <div>
                        <img src={ active } alt="active" />
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Home