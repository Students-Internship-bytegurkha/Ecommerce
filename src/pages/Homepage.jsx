import React from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import RightDashboard from '../components/layout/RightDashboard'
import Productlist from './Productlist'


const Homepage = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen  p-3'>
       
       <Navbar/>

      <div className='flex'>
        <Productlist/>

    <RightDashboard/>

      </div>
      
    </div>
  )
}

export default Homepage
