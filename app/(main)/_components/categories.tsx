'use client'
import { AlignJustify } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const Categories = () => {
  const [onHover, setOnHover] = useState(false)

  const handleHover = useCallback(() => {
    setOnHover(true)
  }, [])

  const handleLeave = useCallback(() => {
    setOnHover(false)
  }, [])

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className='relative h-full bg-blue-500 dark:bg-neutral-600 px-8 md:block hidden'
    >
      <div className='h-full flex flex-col justify-center items-center gap-1'>
        <AlignJustify className='text-white' size={35} />
        <p className='text-xs text-white whitespace-nowrap'>카태고리</p>
      </div>
      {onHover && (
        <div className='z-[9999] absolute top-[112px] w-40 left-0 border shadow-sm '>
          <div className='w-full bg-zinc-50 dark:bg-zinc-700'>
            <div className='flex flex-col py-2 px-5 text-neutral-700 dark:text-white gap-1 text-sm'>
              <p>item1</p>
              <p>item2</p>
              <p>item3</p>
              <p>item4</p>
              <p>item5</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Categories
