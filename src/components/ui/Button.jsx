import React from 'react'

const Button = ({children}) => {
  return (
   <button className='bg-gray-800 text-white w-25 h-9 text-sm rounded-3xl hover:scale-105'>
    {children}
   </button>
  )
}

export default Button
