'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  const onClick = () => {
    router.push('/')
  }
  return (
    <button
      className='hidden xl:block items-center gap-2 ml-1'
      onClick={onClick}
    >
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
  )
}

export default Logo
