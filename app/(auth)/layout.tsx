import getCurrentUser from '@/lib/current-user'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  if (currentUser) redirect('/')

  return <div className='h-full dark:bg-zinc-700'>{children}</div>
}
