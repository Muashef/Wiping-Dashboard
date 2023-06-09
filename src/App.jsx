import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Matches from './pages/Matches/Matches'
import CustomerManagement from './pages/CustomerMgt/CustomerManagement'
import Reports from './pages/Reports/Reports'
import Subscription from './pages/Subscription/Subscription'
import Online from './pages/Online/Online'
import Settings from './pages/Settings/Settings'
import UserAnalytics from './pages/UserAnalytics/UserAnalytics'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/matches' element={<Matches />} />
          <Route path='/customer-mgt' element={<CustomerManagement />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='online' element={<Online />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/user-analytics' element={<UserAnalytics />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
