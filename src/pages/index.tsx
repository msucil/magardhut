import Head from 'next/head'
import CategoryCard from '@/components/categoryCard/categoryCard'
import { APP_DESCRIPTION, APP_ENG_DESCRIPTION, APP_ENG_TITLE, APP_KEYWORDS, APP_TITLE } from '@/lib/constants'


export default function Home() {

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={`${APP_DESCRIPTION} ${APP_ENG_DESCRIPTION}`} />
        <meta name="title" content={`${APP_TITLE} | ${APP_ENG_TITLE}`} />
        <meta name='keywords' content={APP_KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='min-vh-100 '>
        <section className='bg-warning mb-3 d-flex'>
          <div className='text-center' style={{ width: '100%', marginTop: '6rem', marginBottom: '8rem' }}>
            <h1 style={{ textShadow: '1px 2px 2px BLACK', fontSize: '5rem', marginBottom: '1rem' }}>मगर ढूट</h1>
            <h4>मगर भाषा (ढूट) सिक्ने सिकाउने साझा चौतारी</h4>
          </div>
        </section>

        <div className='container'>
          <div className="row mb-3">

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Books.png'
                title='शब्दावलीहरू (Vocabularies)'
                route='/learn/vocabularies'
                description='Learn Magar words to speak magar language more proficently'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Books.png'
                route='/learn/grammer'
                title='सामान्य व्याकरण (Basic Grammer)'
                description='Learn Basic Grammer to Compose Sentence more easily'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Book_lover.png'
                route='/learn/words'
                title='मगर भाषामा शब्द निर्माण (Formation of Words)'
                description='Learn how to compose words'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Working.png'
                title='कुराकानी (Conversation)'
                route='/learn/conversations'
                description='Learn how to talk with your friends and family'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Personal_notebook.png'
                title='शब्दकोष (Dictionary)'
                route='/dictionary'
                description='Browse Nepali words to know them in Magar Language'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Post.png'
                title='साहित्य (Literature)'
                route='/literatures'
                description='Read and Learn Poems, Articles in Magar Language'
              />
            </div>

            <div className='col-md-6'>
              <div className='card'>
                <div className='card-body'>
                  <div style={{fontFamily: 'magar_akkha_rik_regular'}}>
                    snd
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
