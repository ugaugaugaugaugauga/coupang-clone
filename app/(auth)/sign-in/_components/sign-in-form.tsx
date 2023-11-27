'use client'

import { Mail, Lock, Eye, ChevronDownSquare, LucideIcon } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { RiEyeCloseLine } from 'react-icons/ri'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import Input from '@/components/input'
import { toast } from 'sonner'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
})

const SignInForm = () => {
  const router = useRouter()

  const [isClicked, setIsClicked] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const Icon = isClicked ? RiEyeCloseLine : Eye

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onRoute = () => {
    router.push('/sign-up')
  }

  const onClick = useCallback(() => {
    setIsClicked((value) => !value)
  }, [])

  const onCheck = useCallback(() => {
    setIsChecked((value) => !value)
  }, [])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)

    signIn('credentials', {
      ...values,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false)

      if (callback?.ok) {
        toast.success('Logged in')
        router.push('/')
        router.refresh()
      }

      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='w-full sm:w-[480px] mx-auto mt-1'
    >
      <Input
        id='email'
        form={form}
        icon={Mail}
        placeholder='아이디(이메일)'
        errorLabel='이메일 형식으로 입력해주세요.'
        disabled={isLoading}
      />

      <div className='flex items-center border border-zinc-300 mt-3'>
        <div className='border-r h-full py-3 bg-zinc-50 dark:bg-zinc-700 px-[10px]'>
          <Lock className='text-zinc-300 dark:text-white' />
        </div>
        <input
          {...form.register('password')}
          type={isClicked ? 'text' : 'password'}
          className='flex-1 ml-3 text-sm font-semibold bg-transparent'
          placeholder='비밀번호'
          disabled={isLoading}
        />
        <button type='button' onClick={onClick} className='px-3 h-full py-3 '>
          <div className='bg-zinc-400 rounded-full'>
            <Icon size={20} className='text-white' />
          </div>
        </button>
      </div>
      <div className='w-full flex justify-between items-center py-2'>
        <div onClick={onCheck} role='button' className='flex items-center'>
          <ChevronDownSquare
            className={cn(
              isChecked
                ? 'text-blue-500 dark:text-rose-500'
                : 'text-zinc-200 dark:text-zinc-600',
            )}
          />
          <p className='text-sm font-light ml-1'>자동로그인</p>
        </div>
        <div
          role='button'
          className='text-sm text-blue-600 font-light dark:text-white'
        >
          아이디·비밀번호 찾기&gt;
        </div>
      </div>

      <button
        type='submit'
        className='w-full py-[10px] bg-blue-600 text-white dark:bg-white dark:text-black rounded-sm'
      >
        <p className='font-bold'>로그인</p>
      </button>
      <hr className='my-3' />
      <button
        type='button'
        className='mt-1 w-full py-[10px] border border-black dark:border-white rounded-sm'
      >
        <div role='button' onClick={onRoute} className='font-bold'>
          회원가입
        </div>
      </button>

      <div className='flex justify-center text-xs font-thin mt-7 '>
        <div className='flex flex-col text-center gap-1'>
          <p>법인 고객이신가요?</p>
          <p>사업자 회원으로 전용 특가 혜택을 누려보세요.</p>
          <div role='button' className='text-base font-bold'>
            쿠팡비즈 간편가입&gt;
          </div>
          <p className='mt-9 font-extralight'>
            @Coupang Crop. All rights reserved
          </p>
        </div>
      </div>
    </form>
  )
}

export default SignInForm
