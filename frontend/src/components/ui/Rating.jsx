import { StarIcon } from 'lucide-react'
import React from 'react'

const Rating = ({ rating }) => {
  return (
    <div className=' flex items-center text-sm'>
      <StarIcon className='text-yellow-300 fill-yellow-300 size={13}' />{rating}

    </div>
  )
}

export default Rating;
