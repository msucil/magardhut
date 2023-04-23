import Head from 'next/head'
import { Inter } from 'next/font/google'
import CategoryCard from '@/components/categoryCard/categoryCard'
import PageHeader from '@/components/pageHeader'
import { APP_DESCRIPTION, APP_ENG_DESCRIPTION, APP_ENG_TITLE, APP_TITLE } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>{`शब्दकोष | ${APP_TITLE} | ${APP_ENG_TITLE}`}</title>
        <meta name="description" content={`${APP_DESCRIPTION}, ${APP_ENG_DESCRIPTION}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='min-vh-100 '>
        <PageHeader title='शब्दकोष'
          description=''
          background='bg-success'></PageHeader>
        <div className='container'>
          <div className="row mb-3">
            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Personal_notebook.png'
                date='Last Updated 3 mins ago'
                title='Magar To Nepali Dictionary'
                route='#'
                // route='/dictionary/magar-to-nepal'
                description='Browse Magar words to know the meaning in Nepali Language'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Personal_notebook.png'
                date='Last Updated 3 mins ago'
                title='Nepali To Magar Dictionary'
                route='#'
                // route='/dictionary/nepali-to-magar'
                description='Browse Nepali words to know them in Magar Language'
              />
            </div>

          </div>
        </div>
      </div>

    </>
  )
}