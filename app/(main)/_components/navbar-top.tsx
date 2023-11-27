'use client'

import Avatar from '@/components/avatar'
import { User, UserType } from '@prisma/client'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

interface NavbarTopProps {
  currentUser: User | null
}

const NavbarTop = ({ currentUser }: NavbarTopProps) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen((value) => !value)
  }

  const onRoute = async (type: UserType) => {
    await axios
      .patch('/api/user-type-setting', { type: type })
      .then(() => {
        toast.success('변경 성공')
        router.refresh()
      })
      .catch((error) => {
        toast.error('변경 실패')
        console.log(error)
      })
  }

  return (
    <div className='w-full bg-zinc-100 dark:bg-zinc-800'>
      <div className='flex flex-row justify-between items-center p-2 mx-auto xl:w-[1080px]'>
        <div className='flex items-center gap-3 text-[10px]'>
          <button>즐겨찾기</button>
          <button>입점신청</button>
        </div>
        <div className='flex items-center gap-2 text-[10px]'>
          {currentUser ? (
            <>
              <Avatar src={currentUser?.image} size={20} />
              <label className='font-bold'>{currentUser?.name}님</label>
              <button
                className='border bg-white dark:bg-zinc-500 p-[1px]'
                onClick={() => signOut()}
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <button onClick={() => router.push('sign-in')}>로그인</button>
              <button onClick={() => router.push('sign-up')}>회원가입</button>
            </>
          )}

          <button>고객센터</button>
          <button onClick={onClick} className='relative'>
            설정변경
            {isOpen && (
              <div className='absolute z-[9999] text-lg text-white bg-slate-600'>
                <div className='flex flex-col whitespace-nowrap'>
                  <div
                    onClick={() => {
                      onRoute(UserType.GENERAL)
                    }}
                    className='hover:bg-slate-500 hover:text-rose-500 p-2'
                  >
                    일반
                  </div>
                  <div
                    onClick={() => {
                      onRoute(UserType.STORE_OWNER)
                    }}
                    className='hover:bg-slate-500 hover:text-rose-500 p-2'
                  >
                    비즈니스
                  </div>
                  <div
                    onClick={() => {
                      onRoute(UserType.DRIVER)
                    }}
                    className='hover:bg-slate-500 hover:text-rose-500 p-2'
                  >
                    배달기사
                  </div>
                  <div
                    onClick={() => {
                      onRoute(UserType.ADMIN)
                    }}
                    className='hover:bg-slate-500 hover:text-rose-500 p-2'
                  >
                    관리자
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
