import React from 'react'
import { DollarSignIcon, Package, TrophyIcon } from 'lucide-react'
import { products } from '../data/Product'
import ProductCard from '../components/ui/ProductCard'
import StatsCard from '../components/ui/StatsCard'

const Productlist = () => {
  return (
    <div className=' w-screen bg-gray-400 p-4 justify-items-center' >
      <div className='p-3 ml-30  h-[20%] w-[55%] bg-amber-100 grid sm:grid-cols-1 lg:grid-cols-3 gap-4 rounded-2xl'>
        <StatsCard title="Total Product"
          value="2240"
          icon={<Package size="34" />} />
        <StatsCard title="Total Revenue"
          value="$10,240"
          icon={<DollarSignIcon size="34" />} />
        <StatsCard
          title="Highest Performer"
          value="500"
          icon={<TrophyIcon size="34" />} />
      </div>
      <div className='bg-amber-100 w-[55%] h-[75%] ml-30 rounded-2xl mt-4'>
        <p className='font-bold text-xl ml-10 py-2'> Products</p>
        <div className=' gap-5 p-4 grid sm:grid-cols-1 ml-5 justify-items-center  lg:grid-cols-2'>
          {products.map((item) => (
            <ProductCard key={item.id} product={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Productlist
