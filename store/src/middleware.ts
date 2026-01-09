import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  
  const isAuthPage = req.nextUrl.pathname.includes('/authenticate')
  const isAccountPage = req.nextUrl.pathname.startsWith('/account')

  // Redirect unauthenticated users to login
  if (isAccountPage && !isAuthPage && !token) {
    const url = req.nextUrl.clone()
    url.pathname = '/account/authenticate'
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users away from auth page
  if (isAuthPage && token) {
    const url = req.nextUrl.clone()
    url.pathname = '/account'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/account/:path*'],
}