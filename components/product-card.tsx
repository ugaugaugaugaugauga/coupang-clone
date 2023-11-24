'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import StarRating from './star-rating'
import { useEffect, useState } from 'react'
import { PlusCircle, ShoppingCart } from 'lucide-react'

interface ProductCartProps {
  title: string
  url: string | null
  sale?: string
  deliveryInfo: string
  stars: number
  reviewCount: number
}

const ProductCard = ({
  title,
  url,
  sale,
  deliveryInfo,
  stars,
  reviewCount,
}: ProductCartProps) => {
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    setIsMount(true)
  }, [])

  if (!isMount) return null

  return (
    <div className='relative w-52 group'>
      {!!sale && (
        <div className='z-50 absolute top-0 left-0 bg-red-600 text-white py-1 px-2 font-bold'>
          {sale}
        </div>
      )}
      <button className='z-50 absolute top-0 p-2 right-0  rounded-md  text-white bg-zinc-700/20 hover:text-red-300'>
        <PlusCircle />
      </button>

      <Card role='button' className='border-none shadow-none'>
        <CardHeader className='p-0'>
          <CardContent>
            <div className='relative w-full h-52'>
              <Image
                src={url ? url : ''}
                alt='item'
                fill
                className='object-cover'
              />
            </div>
          </CardContent>
        </CardHeader>
        <CardFooter className='mt-1 flex-col gap-1'>
          <CardContent className='w-full'>
            <p className='text-sm truncate group-hover:underline group-hover:text-blue-500 dark:group-hover:text-blue-200'>
              {title}
            </p>
          </CardContent>
          <CardContent className='w-full'>
            <p className='text-sm truncate'>{deliveryInfo}</p>
          </CardContent>
          <CardContent className='w-full flex items-center'>
            <StarRating rating={stars} />
            <p className='text-xs ml-1'>({reviewCount})</p>
          </CardContent>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProductCard
