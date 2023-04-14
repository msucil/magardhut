import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Button, Card } from 'react-bootstrap'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
        <section className='col-md-12 bg-warning mb-3' style={{ height: ' 25vh !important' }}>
          <section className='text-center p-5'>
            <h1>Vocabularies</h1>
            <p>Magar to Nepali and Nepali to Magar Dictionary</p>
          </section>

        </section>
        <div className='container'>
          
        </div>
      </div>

    </>
  )
}