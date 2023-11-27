'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

const BottomNavigation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)

  const handleScroll = useCallback((direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 1000
      if (direction === 'left') {
        containerRef.current.scrollLeft -= scrollAmount!
      } else {
        containerRef.current.scrollLeft += scrollAmount!
      }
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current!

    const handleResize = () => {
      const newIsOverflowingHorizontally =
        container.scrollWidth > container.clientWidth

      const newIsOverflowing = newIsOverflowingHorizontally

      if (newIsOverflowing !== isOverflowing) {
        setIsOverflowing(newIsOverflowing)

        if (newIsOverflowing) {
          console.log('Overflow detected!')
          setIsOverflow(true)
        } else {
          console.log('Overflow resolved!')
          setIsOverflow(false)
        }
      }
    }

    handleResize()

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
    }
  }, [isOverflowing])

  return (
    <>
      {isOverflow && (
        <button
          onClick={() => {
            handleScroll('left')
          }}
          className='z-50 w-auto absolute left-0 top-[63px] bg-white/90 dark:bg-zinc-700/90 rounded-full'
        >
          <ChevronLeft />
        </button>
      )}
      {isOverflow && (
        <button
          onClick={() => {
            handleScroll('right')
          }}
          className='z-50 w-auto absolute right-0 top-[63px] bg-white/90 dark:bg-zinc-700/90 rounded-full'
        >
          <ChevronRight />
        </button>
      )}
      <div
        ref={containerRef}
        className='w-full whitespace-nowrap absolute left-0 top-[65px] overflow-hidden scroll-smooth'
      >
        <div className=' w-full flex gap-2 text-sm'>
          <div className='pl-4' />
          <p>쿠팡플레이</p>
          <p>로켓배송</p>
          <p>로켓프레쉬</p>
          <p>로켓프레쉬</p>
          <p>로켓프레쉬</p>
          <p>로켓프레쉬</p>
          <p>로켓프레쉬</p>
          <p>로켓프레쉬</p>
          <p>로켓프레쉬</p>
          <p>로켓프레쉬</p>
          <p>로켓프레쉬</p>
          <p>쿠팡비즈</p>
          <p>로켓직구</p>
          <p>로켓직구</p>
          <p>로켓직구</p>
          <p>로켓직구</p>
          <p>로켓직구</p>
          <div className='pr-4' />
        </div>
      </div>
    </>
  )
}

export default BottomNavigation
