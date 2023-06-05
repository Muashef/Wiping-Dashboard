import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavBar from '../../components/Header/Navbar'

const Home = () => {
  return (
    <div >
        <NavBar />
        <div className='w-full h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[17rem_1fr] items-stretch'>
        <Sidebar />
        <div>
            <h1>this is the home page</h1>
        </div>
        </div>
        
    </div>
  )
}

export default Home