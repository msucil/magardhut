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
                description='विभिन्न शिर्षकमा मगर शब्दहरू सिकौ र आफ्नो मगर भाषा बलियो बनाऊ'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Books.png'
                route='/learn/grammer'
                title='सामान्य व्याकरण (Basic Grammer)'
                description='सहि तरिकाले व्याकरण मिलाएर मगर भाषा बोल्न र लेख्न सिकौ'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Book_lover.png'
                route='/learn/words'
                title='मगर भाषामा शब्द निर्माण (Formation of Words)'
                description='मगर भाषामा शब्दहरू निर्माण तथा यसको रूप परिबर्तन गरि बोल्न र लेख्न सिकौ'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Working.png'
                title='कुराकानी (Conversation)'
                route='/learn/conversations'
                description='विभिन्न सिर्सकमा मगर भाषाका कुराकानिहरू पढौ र सजिलो सँग मगर भाषा बोल्न सिकौ'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Post.png'
                title='अक्खा लिपि (Akkha Lipi)'
                route='/learn/akkha-lipi'
                description='अक्खा लिपि लेख्न र पढ्न सिकौ, आफ्नो लिपि को संरक्षण तथा प्रर्बदन गराै'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Personal_notebook.png'
                title='शब्दकोष (Dictionary)'
                route='/dictionary'
                description='नेपाली - मगर शब्दकोष'
              />
            </div>

            <div className="col-md-6">
              <CategoryCard
                image='/undraw_Post.png'
                title='साहित्य (Literature)'
                route='/literatures'
                description='मगर भाषाको कथा, कविता तथा अन्य साहित्यिक रचनाहरू पढौँ'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
