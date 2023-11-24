import { ModeToggle } from '@/components/mode-toggle'
import Categories from './categories'
import Logo from './logo'
import SearchBar from './search'
import UserMenu from './user-menu'
import Cart from './cart'
import BottomNavigation from './bottom-navigation'

const Navbar = () => {
  return (
    <nav className='bg-transparent h-28 w-full flex flex-row justify-center items-center gap-3'>
      <Categories />
      <div className='relative w-full flex'>
        <div className='flex-1 flex flex-row w-full gap-3 items-center pb-3'>
          <Logo />
          <SearchBar />
          <UserMenu />
          <Cart />
          <ModeToggle />
        </div>
        <BottomNavigation />
      </div>
    </nav>
  )
}

export default Navbar
