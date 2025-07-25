import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

console.log('[middleware] loaded!')


export function middleware(req: NextRequest) {
  console.log('[middleware] hitting:', req.nextUrl.pathname)
  const token = req.cookies.get('jwt')?.value
  if (process.env.NODE_ENV !== 'production') {
    console.log('[middleware] jwt token detected')
  }

  if (req.nextUrl.pathname.startsWith('/account')
      && !req.nextUrl.pathname.includes('/authenticate')
      && !token
  ) {
    console.log('[middleware] redirecting to /account/authenticate')
    const url = req.nextUrl.clone()
    url.pathname = '/account/authenticate'
    return NextResponse.redirect(url)
  }

  if(req.nextUrl.pathname.startsWith('/account')
    && req.nextUrl.pathname.includes('/authenticate')
    && token
  )
  {
    console.log('[middleware] redirecting to /account')
    const url = req.nextUrl.clone()
    url.pathname = '/account'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  // runtime: 'nodejs',
  matcher: ['/account/:path*'],
}