'use client'

import { ShoppingCart } from 'lucide-react'

const Cart = () => {
  return (
    <button className='relative flex-col items-center gap-1 text-zinc-500 dark:text-zinc-100 md:flex hidden dark:hover:text-zinc-300 hover:text-zinc-700'>
      <ShoppingCart size={35} />
      <div className='text-xs'> 장바구니</div>
      <div className='absolute -top-1 right-0 rounded-full w-5 h-5 bg-blue-500 text-[12px] font-extrabold text-white dark:bg-zinc-200 dark:text-zinc-900'>
        <p className='flex items-center justify-center'>0</p>
      </div>
    </button>
  )
}

export default Cart
