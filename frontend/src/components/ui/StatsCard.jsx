import React from 'react'

const StatsCard = ({title,icon,value}) => {
  return (
     <div className=' w-[95%] rounded-2xl bg-blue-200 ml-2 '>
    
     <div className=' text-center gap-12  flex justify-center'>
         <div className='mt-8 ml-4'>{icon}</div>
        <div className='mt-8 text-xl font-semibold'>{title}</div>
     </div>
            <p className='font-bold text-2xl  pl-18 '>{value}</p>
     </div>

    


    
  )
}

export default StatsCard;
