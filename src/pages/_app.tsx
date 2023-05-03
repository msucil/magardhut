import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Layout from '@/components/layout/layout'
import { SSRProvider } from 'react-bootstrap'
import Head from 'next/head'
import Script from 'next/script'
import {StickyShareButtons} from 'sharethis-reactjs';

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
         {/* <script async src={`https://platform-api.sharethis.com/js/sharethis.js#property=${SHARETHIS_SOP}&product=sop`}></script> */}
        {/*<script async src={`https://platform-api.sharethis.com/js/sharethis.js#property=${SHARETHIS_PROPERTY}&product=sticky-share-buttons&source=platform`}></script> */}
       
      </Head>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
          <StickyShareButtons
          config={{
            alignment: 'right',    // alignment of buttons (left, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 12,        // font size for the buttons
            labels: 'cta',     // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 10,         // hide react counts less than min_count (INTEGER)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'facebook',
              'twitter',
              'linkedin',
              'blogger',
              'whatsapp',
              'messenger',
              'email',
              'sharethis'
            ],
            padding: 10,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,     // show/hide the total share count (true, false)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: false,    // show/hide the toggle buttons (true, false)
            size: 40,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page


            // OPTIONAL PARAMETERS
            

          }}
        />
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
    </>
  )
}