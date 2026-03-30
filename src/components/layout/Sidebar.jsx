import {  Boxes,  ChartBar, Eye, Headset, IdCard, LayoutDashboard, LayoutDashboardIcon, Lock, MessageCircle, Moon, Settings, SidebarIcon, Store, Sun, UserCircle, Wallet } from 'lucide-react'
import React from 'react'
import SidebarItem from '../ui/SidebarItem'

const Sidebar = () => {
  return (
    <div className='w-[18%] bg-gray-50 h-full shadow-md p-3 rounded-xl '>
    <div className='flex justify-between items-center   h-4 p-2'>
        <p className='font-bold text-l'>CRLLSS</p> <SidebarIcon size={20}/></div>
   <hr className='mt-3 text-gray-300'/>

   <div className='flex flex-col gap-3  mt-2 text-xs p-3'>
   <SidebarItem  icon={LayoutDashboardIcon} label="Dashboard"/>
<div className='flex gap-2 h-7 rounded-md items-center  hover:bg-gray-200 ' > <UserCircle size={16}/>    <select ><option>Customers</option></select></div>
 <SidebarItem label="Products" icon={Boxes}/>
       <div className='flex gap-2  hover:bg-gray-200    h-7 rounded-md items-center '>
        <Store size={16}/>
       <p>Shop</p>
        <p className='text-gray-400 ml-8'> 
            <Eye size={16}/></p>
             <p className='text-gray-400'><Lock size={14}/></p></div>
        <div className='flex gap-2  hover:bg-gray-200    h-7 rounded-md items-center '><Wallet size={16}/><select><option>Wallet</option></select></div>
         <div className='flex gap-2  hover:bg-gray-200    h-7 rounded-md items-center '><IdCard size={16}/><select><option>Payment</option></select></div>
         <SidebarItem label="Analytics" icon={ChartBar}/>
          <hr className='text-gray-200'/>
      <SidebarItem label="Support" icon={Headset}/>
           <SidebarItem label="Setting" icon={Settings}/>
   </div>

   <div className='flex flex-col justify-end   gap-2 px-4 mt-8'> 
    
         <p className='bg-gray-100 w-6 h-6 rounded-md flex justify-center items-center'>  <MessageCircle size={16}/></p>  
      
      <p className='bg-gray-50 w-6 h-6 rounded-md flex justify-center items-center'>  <Moon size={16}/></p>
        <p className='bg-black w-6 h-6 rounded-md flex justify-center items-center'><Sun size={16} className=' text-white '/></p>
   </div>
     
    </div>

    
  )
}

export default Sidebar
