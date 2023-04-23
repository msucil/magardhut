import Head from 'next/head'
import { Inter } from 'next/font/google'
import PageHeader from '@/components/pageHeader'
import { APP_DESCRIPTION, APP_ENG_DESCRIPTION, APP_ENG_TITLE, APP_TITLE } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const posts: any = props.posts;

  return (
    <>
      <Head>
        <title>{`साहित्य | ${APP_TITLE} | ${APP_ENG_TITLE}`}</title>
        <meta name="description" content={'मगर भाषाको कथा, कविता तथा अन्य साहित्यिक रचनाहरू पढौँ'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='min-vh-100 '>
      <PageHeader title='साहित्य'
          description='मगर भाषाको कथा, कविता तथा अन्य साहित्यिक रचनाहरू पढौँ '
          background='bg-primary'></PageHeader>
        <div className='container'>
          
        </div>
      </div>

    </>
  )
}