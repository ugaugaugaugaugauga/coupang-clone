import ItemBody from './_components/item-body'
import SideNavigation from './_components/side-navigation'
import UserWalletInfo from './_components/user-wallet-info'

const GeneralPage = () => {
  return (
    <div className='w-full mx-auto xl:w-[1080px] flex flex-col mt-5 dark:bg-zinc-700'>
      <UserWalletInfo />
      <div className='flex'>
        <SideNavigation />
        <ItemBody />
      </div>
    </div>
  )
}

export default GeneralPage
