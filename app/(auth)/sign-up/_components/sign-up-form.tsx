'use client'

import { Mail, Lock, User } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Input from '@/components/input'
import axios from 'axios'
import { toast } from 'sonner'

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
    name: z.string().min(2),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
      })
    }
  })

const SignUpForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    axios
      .post('/api/register', values)
      .then(() => {
        toast.success('성공')
        router.push('/sign-in')
      })
      .catch((error) => {
        toast.error('에러')
      })
      .finally(() => {
        setIsLoading(false)
      })
    console.log(values)
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='w-full sm:w-[480px] mx-auto mt-4'
    >
      <p className='text-md font-bold mb-2'>회원정보를 입력해주세요</p>
      <Input
        id='email'
        form={form}
        icon={Mail}
        placeholder='아이디(이메일)'
        errorLabel='이메일 형식으로 입력해주세요.'
        disabled={isLoading}
      />
      <Input
        id='password'
        form={form}
        icon={Lock}
        placeholder='비밀번호'
        errorLabel='비밀번호는 최소 4글자 이상입니다.'
        disabled={isLoading}
      />
      <Input
        id='confirmPassword'
        form={form}
        icon={Lock}
        placeholder='비밀번호 확인'
        disabled={isLoading}
      />
      {form.getValues('password') &&
        form.getValues('password') !== form.getValues('confirmPassword') && (
          <div className='text-xs mt-2 px-2 text-rose-500 dark:text-white'>
            <span>비밀번호가 일치하지 않습니다.</span>
          </div>
        )}
      <Input
        id='name'
        form={form}
        icon={User}
        placeholder='이름'
        errorLabel='이름은 최소 2글자 이상입니다.'
        disabled={isLoading}
      />

      <hr className='my-5' />

      <button
        type='submit'
        className='w-full py-[10px] bg-blue-600 text-white dark:bg-white dark:text-black rounded-sm'
      >
        <p className='font-bold'>동의하고 가입하기</p>
      </button>

      {/* footer */}
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

export default SignUpForm
