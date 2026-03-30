import React, { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import RightDashboard from '../components/layout/RightDashboard'


import Productlist from './Productlist';


const Homepage = () => {
  const[search,setSearch]=useState("");
  return (
    <div className='bg-gray-100 w-screen h-screen  p-3'>
       
       <Navbar search={search} setSearch={setSearch}/>

      <div className='flex'>
       <Productlist/>
       <RightDashboard/>
       


      </div>
      
    </div>
  )
}

export default Homepage
