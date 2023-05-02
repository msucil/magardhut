import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Layout from '@/components/layout/layout'
import { SSRProvider } from 'react-bootstrap'
import Head from 'next/head'
import Script from 'next/script'

const GTagId = process.env.NEXT_PUBLIC_GTAG_ID;
const SHARETHIS_PROPERTY = process.env.NEXT_PUBLIC_SHARETHIS_PROPERTY;
const SHARETHIS_SOP = process.env.NEXT_PUBLIC_SHARETHIS_SOP;

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
        {/* <script async src={`https://platform-api.sharethis.com/js/sharethis.js#property=${SHARETHIS_PROPERTY}&product=sticky-share-buttons&source=platform`}></script> */}
        {/*  */}
      </Head>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
          <div className="sharethis-sticky-share-buttons"/>
        </Layout>
      </SSRProvider>

      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${GTagId}`}/>
      <Script id='google-tag' type='text/javascript'>
        {`
          window.dataLayer = window.dataLayer || [];
          
          function gtag(){
            dataLayer.push(arguments);
          }

          gtag('js', new Date());
        
          gtag('config', '${GTagId}');
          `
        }
      </Script>

      <Script strategy='lazyOnload' src={`https://platform-api.sharethis.com/js/sharethis.js#property=${SHARETHIS_PROPERTY}&product=sticky-share-buttons&source=platform`}></Script>
      <Script strategy='lazyOnload' src={`https://platform-api.sharethis.com/js/sharethis.js#property=${SHARETHIS_SOP}&product=sop`}></Script>

      <style>
        
      </style>
    </>
  )
}