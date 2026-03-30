import React from 'react'
import Rating from './Rating'
import { StarIcon } from 'lucide-react';


const ProductCard = ({product }) => {
  return (
    <div className='h-60 w-80 bg-amber-100 shadow-olive-100 border rounded-2xl p-2'>
      <div className=' h-[70%]  rounded-2xl bg-amber-50 '>
        <img src={product.image} className='h-full w-full rounded-2xl' />
      </div>
      <div>
        <div className='font-bold flex justify-between p-2'>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
        <div className='flex  gap-10'>
          <p><StarIcon size={14}/>
            {product.rating}</p>
          <p>{product.category}</p>
        </div>
      </div>
    </div>

  )
}

export default ProductCard;
