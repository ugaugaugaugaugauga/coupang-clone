'use client'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { UseFormRegisterReturn, UseFormReturn } from 'react-hook-form'

interface InputProps {
  id: string
  form: UseFormReturn<any>
  type?: string
  placeholder?: string
  errorLabel?: string
  icon?: LucideIcon
  disabled: boolean
}

const Input = ({
  id,
  form,
  type = '',
  placeholder = '',
  errorLabel = '',
  icon: Icon,
  disabled,
}: InputProps) => {
  return (
    <div className='w-full pt-3'>
      <div
        className={cn(
          'flex items-center border border-zinc-300 ',
          !!form.formState.errors[id] &&
            'border-b-rose-500 border-b-2 dark:border-b-white',
          disabled && 'cursor-not-allowed',
        )}
      >
        {Icon && (
          <div className='border-r h-full py-3 bg-zinc-50 dark:bg-zinc-700 px-[10px]'>
            <Icon className='text-zinc-300 dark:text-white' />
          </div>
        )}

        <input
          type={type}
          {...form.register(id)}
          className='flex-1 ml-3 text-sm font-semibold bg-transparent'
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>

      {!!form.formState.errors[id] && (
        <div className='text-xs px-2 mt-2 text-rose-500 dark:text-white'>
          <span>{errorLabel}</span>
        </div>
      )}
    </div>
  )
}

export default Input
