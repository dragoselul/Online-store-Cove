'use client'

// import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ChakraProvider toastOptions={{defaultOptions: { position: 'bottom-right', isClosable: true, variant: 'top-accent' }}}>{children}</ChakraProvider>
  )
}