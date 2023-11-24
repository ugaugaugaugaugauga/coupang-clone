'use client'

import { useCallback, useRef, useState } from 'react'
import { Briefcase, ChevronLeft, ChevronRight, LucideIcon } from 'lucide-react'
import ProductCard from '@/components/product-card'

const itemList: any = []

for (let i = 0; i < 18; i++) {
  const newItem = {
    url: `https://picsum.photos/100/100?random=${Math.floor(
      5000 * Math.random(),
    )}`,
    sale: `${Math.floor(100 * Math.random())}%`,
    title: `Product ${i + 1}`,
    deliveryInfo: '무료배송',
    stars: (5 * Math.random()).toFixed(1),
    reviewCont: Math.floor(5000 * Math.random()),
  }

  itemList.push(newItem)
}

interface AdProductsProps {
  title: string
}

const AdProducts = ({ title }: AdProductsProps) => {
  const mainRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = mainRef.current?.offsetWidth
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount!
      } else {
        scrollRef.current.scrollLeft += scrollAmount!
      }
    }
  }, [])

  return (
    <div className='mx-auto my-14 xl:w-[1080px] w-full'>
      <div ref={mainRef} className='relative w-full overflow-hidden'>
        <div className='flex flex-row items-center'>
          <Briefcase className='text-pink-500' />
          <div className='ml-2 text-2xl font-extrabold'>{title}</div>
        </div>

        <div className='w-full h-auto whitespace-nowrap overflow-x-auto mt-7'>
          <button
            onClick={() => handleScroll('left')}
            className='absolute z-50 h-16 bg-zinc-900/90 hover:bg-zinc-600/90 left-0 top-1/3'
          >
            <ChevronLeft size={30} className='text-white' />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className='absolute z-50 h-16 bg-zinc-900/90 hover:bg-zinc-600/90 right-0 top-1/3'
          >
            <ChevronRight size={30} className='text-white' />
          </button>
          <div
            ref={scrollRef}
            className='flex space-x-2 p-0 scroll-smooth overflow-x-hidden'
          >
            {itemList.map((item: any) => (
              <div key={item.reviewCont} className='w-full'>
                <ProductCard
                  url={item.url}
                  sale={item.sale}
                  title={item.title}
                  deliveryInfo={item.deliveryInfo}
                  stars={item.stars}
                  reviewCount={item.reviewCont}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdProducts
