import { Article, getArticles } from '@/lib/learn';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head'
import Link from 'next/link';

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
                  <div className="p-4 border-0 border-end border-bottom border-secondary-subtle position-relative shadow mb-5">
                    <div className="article-body">
                      <h4>
                        <Link className='text-decoration-none text-body stretched-link' href={`/learn/grammer/${a.id}`}>{a.title}</Link>
                      </h4>
                      <div className="article-text">{a.description}</div>
                      <div className="text-body-secondary small lh-lg"><i className="bi bi-calendar-week"></i> {a.date}</div>
                    </div>
                  </div>

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