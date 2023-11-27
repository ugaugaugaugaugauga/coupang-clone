import getCurrentUser from '@/lib/current-user'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { type } = body
    const currentUser = await getCurrentUser()

    const user = await db.user.update({
      where: {
        id: currentUser?.id,
      },
      data: {
        userType: type,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 })
  }
}
