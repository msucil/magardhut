import ArticleBrief from '@/components/articleBrief';
import { Article, getArticles } from '@/lib/learn';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head'

export default function GrammerHome({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {

  // const posts: any = props.posts;

  return (
    <>
      <Head>
        <title>Platform for Learning Magar Language | Magar Dhut</title>
        <meta name="description" content="Learn Magar Language" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='min-vh-100 '>
        <section className='bg-warning mb-3 d-flex'>
          <div className='text-center' style={{ width: '100%', marginTop: '6rem', marginBottom: '8rem' }}>
            <h1 style={{ textShadow: '1px 2px 2px BLACK', fontSize: '5rem' }}>व्याकरण (Grammer)</h1>
            <h4>Learn how to read, write and speak with correct grammer in Magar Language (Dhut)</h4>
          </div>
        </section>
        <section className='container'>
          <div className="row mt-5">
            {
              articles.map((a) => (
                <div className="col-md-6" key={a.id}>
                  <ArticleBrief title={a.title} description={a.description || ''} date={a.date} url={`/learn/grammer/${a.id}`}></ArticleBrief>
                </div>
              )
              )}
          </div>

        </section>
      </div>

      <style jsx>{`
        
      `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps<{ articles: Article[] }> = async (context) => {
  const articles = getArticles('grammer');
  return {
    props: {
      articles
    }
  };
}