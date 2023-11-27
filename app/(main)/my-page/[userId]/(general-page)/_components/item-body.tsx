'use client'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

enum Selected {
  ALL,
  DELIVERY,
  TRAVEL,
}

const ItemBody = () => {
  const [selectNavigation, setSelectNavigation] = useState(Selected.ALL)

  const onSelected = useCallback((value: Selected) => {
    setSelectNavigation(value)
  }, [])

  return (
    <div className='flex-1 md:pl-7 px-2'>
      <div className='flex flex-col'>
        <div className='mt-10 text-xl font-bold'>주문목록</div>
        <div className='w-full md:w-[480px] flex items-center border rounded-sm mt-4 border-zinc-700 dark:border-zinc-300'>
          <input
            type='text'
            placeholder='주문한 상품을 검색할 수 있어요!'
            className='bg-transparent flex-1 p-2 text-sm'
          />
          <Search
            role='button'
            className='mr-2 text-blue-500 dark:text-white'
          />
        </div>
        <div className='flex mt-2 text-xs gap-2'>
          <button className='rounded-full p-[5px] border text-white bg-blue-600'>
            최근 6개월
          </button>
          <button className='rounded-full p-[5px] border px-4'>2023</button>
          <button className='rounded-full p-[5px] border px-4'>2022</button>
          <button className='rounded-full p-[5px] border px-4'>2021</button>
        </div>
        <div className='flex mt-6'>
          <button
            onClick={() => onSelected(Selected.ALL)}
            className={cn(
              'flex-1 flex justify-center py-2 border-2 ',
              selectNavigation === Selected.ALL
                ? 'border-blue-600 border-b-0 dark:border-white'
                : 'border-b-blue-600 dark:border-b-white',
            )}
          >
            전체
          </button>
          <button
            onClick={() => onSelected(Selected.DELIVERY)}
            className={cn(
              'flex-1 flex justify-center py-2 border-2 ',
              selectNavigation === Selected.DELIVERY
                ? 'border-blue-600 border-b-0 dark:border-white'
                : 'border-b-blue-600 dark:border-b-white',
            )}
          >
            배송상품
          </button>
          <button
            onClick={() => onSelected(Selected.TRAVEL)}
            className={cn(
              'flex-1 flex justify-center py-2 border-2 ',
              selectNavigation === Selected.TRAVEL
                ? 'border-blue-600 border-b-0 dark:border-white'
                : 'border-b-blue-600 dark:border-b-white',
            )}
          >
            여행상품
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemBody
