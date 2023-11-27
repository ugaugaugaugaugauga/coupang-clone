'use client'

import { cn } from '@/lib/utils'
import { useCallback, useState } from 'react'
import SignInForm from './sign-in-form'
import QRInput from './QR-input'

const SignInOptionBar = () => {
  const [isEmailSelected, setIsEmailSelected] = useState(true)
  const [isQRSelected, setIsQRSelected] = useState(false)

  const toggle = useCallback(() => {
    setIsEmailSelected((value) => !value)
    setIsQRSelected((value) => !value)
  }, [])

  return (
    <>
      <div className='w-full'>
        <div className=' sm:w-[480px] mt-8 mx-auto'>
          <div className='flex justify-between text-md'>
            <button
              onClick={toggle}
              className={cn(
                'flex justify-center pb-2 w-1/2',
                isEmailSelected
                  ? 'border-b-[3px] border-blue-500 text-blue-500 font-bold dark:border-white dark:text-white'
                  : '',
              )}
            >
              이메일 로그인
            </button>
            <button
              onClick={toggle}
              className={cn(
                'flex justify-center pb-2 w-1/2 text-md ',
                isQRSelected
                  ? 'border-b-[3px] border-blue-500 text-blue-500 font-bold dark:border-white dark:text-white'
                  : '',
              )}
            >
              QR코드 로그인
            </button>
          </div>
        </div>
        <hr />
      </div>
      {isEmailSelected && <SignInForm />}
      {isQRSelected && <QRInput />}
    </>
  )
}

export default SignInOptionBar
