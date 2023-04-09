import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import MainNavbar from '@/components/navbar/MainNavbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainNavbar/>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
