'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  const onClick = () => {
    router.push('/')
    router.refresh()
  }
  return (
    <div className='flex justify-center'>
      <button className='mt-10' onClick={onClick}>
        <Image
          src={'/logo.png'}
          alt='logo'
          width={180}
          height={180}
          className='dark:hidden block'
        />
        <Image
          src={'/logo-dark.png'}
          alt='logo'
          width={180}
          height={180}
          className='dark:block hidden'
        />
      </button>
    </div>
  )
}

export default Logo
