import Navbar from './_components/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full dark:bg-zinc-700'>
      <Navbar />
      {children}
    </div>
  )
}
