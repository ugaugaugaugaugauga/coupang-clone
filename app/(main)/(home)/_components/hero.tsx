'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const Hero = () => {
  const images = ['/hero1.png', '/hero2.png', '/hero3.png', '/hero4.png']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
  const [isMount, setIsMount] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    setIntervalId(interval)

    return () => clearInterval(interval)
  }, [images.length])

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
    resetInterval()
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    resetInterval()
  }

  const resetInterval = () => {
    if (intervalId !== null) {
      clearInterval(intervalId)
      const newInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)
      setIntervalId(newInterval)
    }
  }

  useEffect(() => {
    setIsMount(true)
  }, [])

  if (!isMount) return null

  return (
    <div className='w-full md:block hidden'>
      <div className='relative flex '>
        <button
          className='z-50 absolute h-full bg-white/40 dark:bg-black/40 flex items-center hover:bg-white/90 dark:hover:bg-black/70'
          onClick={handlePrevClick}
        >
          <ChevronLeft className='mx-3' />
        </button>
        <button
          className='z-50 absolute right-0 h-full bg-white/40 dark:bg-black/40 flex items-center hover:bg-white/90 dark:hover:bg-black/70'
          onClick={handleNextClick}
        >
          <ChevronRight className='mx-3' />
        </button>
        <div className='relative w-full h-[450px]'>
          <Image
            src={images[currentIndex]}
            alt={`hero${currentIndex + 1}`}
            fill
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}
