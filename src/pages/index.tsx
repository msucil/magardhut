import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Post, getSortedPostsData } from '@/lib/posts'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import CategoryCard from '@/components/categoryCard/categoryCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

  // const posts: any = props.posts;

  return (
    <>
      <Head>
        <title>Platform for Learning Magar Language | Magar Dhut</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='min-vh-100 '>
        <section className='bg-warning mb-3 d-flex'>
          <div className='text-center' style={{ width: '100%', marginTop: '6rem', marginBottom: '8rem' }}>
            <h1 style={{ textShadow: '1px 2px 2px BLACK', fontSize: '5rem' }}>Magar Dhut</h1>
            <h4>Platform for Learning Magar Language (Dhut)</h4>
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

          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async (context) => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    }
  };
}