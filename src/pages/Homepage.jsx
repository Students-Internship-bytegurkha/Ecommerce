import React from 'react'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'


const Homepage = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen flex p-3'>
        <Sidebar/>
        <Navbar/>
      
    </div>
  )
}

export default Homepage
