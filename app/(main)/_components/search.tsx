'use client'

import { cn } from '@/lib/utils'
import { ChevronDown, ChevronUp, Mic, Search } from 'lucide-react'
import { useCallback, useState } from 'react'

const SearchBar = () => {
  const [isFocus, setIsFocus] = useState(false)
  const [categoryLabel, setCategoryLabel] = useState('전체')
  const [isOpen, setIsOpen] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocus(true)
  }, [])
  const handleInputBlur = useCallback(() => {
    setIsFocus(false)
  }, [])
  const handleButtonBlur = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onClick = () => {
    setIsOpen((value) => !value)
  }

  const Icon = isOpen ? ChevronUp : ChevronDown

  return (
    <div className='flex-1 ml-2'>
      <div className='flex flex-row border-2 border-blue-500 dark:border-white w-full h-10'>
        {/* category button */}
        <button
          onClick={onClick}
          className='relative w-32 flex-row items-center text-neutral-500 dark:text-white md:flex hidden'
          onBlur={handleButtonBlur}
        >
          <div className='text-xs ml-2 whitespace-nowrap'>{categoryLabel}</div>
          <div className='flex-1'>
            <Icon size={15} className='ml-auto' />
          </div>
          <div className='border-r h-full ml-2' />
          <div
            className={cn(
              isOpen
                ? 'flex ease-in-out absolute top-9 z-[9999] border pt-3 pl-3  flex-col items-start gap-2 p-1 text-sm bg-white dark:bg-zinc-600 shadow-md w-full font-medium'
                : 'hidden',
            )}
          >
            {/* category items */}
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
          </div>
        </button>
        {/* input */}
        <div className='relative flex-1 flex items-center text-sm'>
          <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder='찾고 싶은 상품을 검색해보세요!'
            className='ml-2 w-full rounded-none outline-none  text-neutral-900 dark:text-white dark:bg-transparent'
          />
          <div className='w-full absolute z-[9999] top-9 bg-white dark:bg-zinc-600'>
            {isFocus && (
              <div className='border border-gray-300 shadow-md  pt-3 text-xs'>
                <div className='px-2 font-bold'>최근 검색어</div>
                <hr className='mt-2' />
                <div className='p-2 mt-3 text-neutral-700 dark:text-white flex flex-col gap-2 '>
                  {/* search items */}
                  <p className='truncate'>파머스넷</p>
                  <p className='truncate'>파머스넷 파머스넷</p>
                  <p className='truncate'>파머스넷 파머스넷 파머스넷</p>
                </div>
                <div className='flex flex-row border-t bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-white p-2'>
                  <div>전체삭제</div>
                  <div className='ml-auto'>최근검색어 끄기</div>
                </div>
              </div>
            )}
          </div>
          {/* right icons */}
          <div className='flex flex-row items-center gap-3 pr-3'>
            <Mic role='button' size={20} />
            <Search
              role='button'
              className='text-blue-600 dark:text-white'
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
