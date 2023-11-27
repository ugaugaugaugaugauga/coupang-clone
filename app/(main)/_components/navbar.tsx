import { ModeToggle } from '@/components/mode-toggle'
import Categories from './categories'
import Logo from './logo'
import SearchBar from './search'
import UserMenu from './user-menu'
import Cart from './cart'
import BottomNavigation from './bottom-navigation'
import getCurrentUser from '@/lib/current-user'
import NavbarTop from './navbar-top'

const Navbar = async () => {
  const currentUser = await getCurrentUser()

  return (
    <>
      <NavbarTop currentUser={currentUser} />
      <nav className='mx-auto xl:w-[1080px] bg-transparent h-28 w-full flex flex-row justify-center items-center gap-3'>
        <Categories />
        <div className='relative w-full flex'>
          <div className='flex-1 flex flex-row w-full gap-3 items-center pb-3'>
            <Logo />
            <SearchBar />
            <UserMenu currentUser={currentUser} />
            <Cart />
            <ModeToggle />
          </div>
          <BottomNavigation />
        </div>
      </nav>
      <hr />
    </>
  )
}

export default Navbar
