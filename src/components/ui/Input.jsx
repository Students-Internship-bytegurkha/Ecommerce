import React from 'react'

const Input = ({type='text',
  placeholder='',value,onChange,className='bg-white text-gray-800 text-sm h-9 w-40 rounded-2xl outline-0',

}) => {

  return (
    <div>
      <input type={type} placeholder={placeholder} className={className}
      value={value} onChange={onChange} />
    </div>
  )
}

export default Input
