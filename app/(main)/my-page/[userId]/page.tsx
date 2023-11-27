import getCurrentUser from '@/lib/current-user'
import { redirect } from 'next/navigation'
import GeneralPage from './(general-page)/general-page'
import { UserType } from '@prisma/client'
import StorePage from './(store-page)/store-page'
import DriverPage from './(driver-page)/driver-page'
import AdminPage from './(admin-page)/admin-page'

const MyPage = async ({ params }: { params: { userId: string } }) => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return redirect('/sign-in')
  }

  if (currentUser.userType === UserType.GENERAL) return <GeneralPage />
  if (currentUser.userType === UserType.STORE_OWNER) return <StorePage />
  if (currentUser.userType === UserType.DRIVER) return <DriverPage />
  if (currentUser.userType === UserType.ADMIN) return <AdminPage />

  return null
}

export default MyPage
