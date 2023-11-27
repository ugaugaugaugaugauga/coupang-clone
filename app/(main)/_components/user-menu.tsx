'use client'

import { User } from '@prisma/client'
import { User2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface UserMenuProps {
  currentUser: User | null
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const router = useRouter()
  const onClick = () => {
    if (!currentUser) router.push('/sign-in')
    router.push(`/my-page/${currentUser?.id}`)
  }

  return (
    <button
      onClick={onClick}
      className='flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-300 hover:text-zinc-700 md:mr-0 mr-3'
    >
      <User2 size={35} />
      <div className='text-xs'>마이쿠팡</div>
    </button>
  )
}

export default UserMenu
