import React from 'react'

const SidebarItem = ({onClick,icon:Icon,label}) => {
  return (
       <div onClick={onClick} className='flex gap-2 hover:bg-gray-200 hover:scale-105 w-38   h-7 rounded-md items-center '>
       <Icon size={16}/> <p>{label}</p></div>
  )
}

export default SidebarItem
