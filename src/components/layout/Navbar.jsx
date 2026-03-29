import { Bell, MessageCircle, Search, SearchIcon, User2 } from 'lucide-react'
import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

const Navbar = () => {
  return (
    <div className='bg-gray-300 h-[10%] w-full flex justify-between  items-center px-8  rounded-md'>

      <div>  <h1 className='text-2xl font-semibold'>Shop</h1></div>
       

       <div className='flex gap-3'>
         <div className='rounded-2xl bg-gray-50 flex w-50 h-9 items-center px-2'>
          <SearchIcon  size={18} className='text-gray-500'/>  <Input/>
        </div>

        <Button >Create</Button>
        <div className='bg-gray-50 rounded-full h-9 w-9 flex justify-center items-center'>
            <Bell size={18}/>
        </div>
         <div className='bg-gray-50 rounded-full h-9 w-9 flex justify-center items-center'>
            <MessageCircle size={18}/>
        </div>

         <div className='bg-gray-50 rounded-full h-9 w-9 flex justify-center items-center'>
            <User2 size={18}/>
        </div>
       </div>


      

      
    </div>
  )
}

export default Navbar
