import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Layout from '@/components/layout/layout'
import { SSRProvider } from 'react-bootstrap'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel='icon' href='/undraw_Reading_list_192X192.png' />
      </Head>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </SSRProvider>
    </>
  )
}
