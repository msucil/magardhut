import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import MainNavbar from '@/components/mainnavbar/MainNavbar'
import Layout from '@/components/layout/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
      <Component {...pageProps} />
      <Analytics />
      </Layout>
    </>
  )
}
