// import ArticleBrief from '@/components/articleBrief';
// import PageHeader from '@/components/pageHeader';
// import { Article, getArticles } from '@/lib/learn';
// import { GetStaticProps, InferGetStaticPropsType } from 'next';
// import Head from 'next/head'

// export default function GrammerHome({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {

//   // const posts: any = props.posts;

//   return (
//     <>
//       <Head>
//         <title>Platform for Learning Magar Language | Magar Dhut</title>
//         <meta name="description" content="Learn Magar Language" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <div className='min-vh-100 '>
//         <PageHeader title='व्याकरण (Grammer)'
//          description='Learn how to read, write and speak with correct grammer in Magar Language (Dhut)'
//         background='bg-warning'></PageHeader>
//         <section className='container'>
//           <div className="row mt-5">
//             {
//               articles.map((a) => (
//                 <div className="col-md-6" key={a.id}>
//                   <ArticleBrief title={a.title} description={a.description || ''} date={a.date} url={`/learn/grammer/${a.id}`}></ArticleBrief>
//                 </div>
//               )
//               )}
//           </div>

//         </section>
//       </div>

//       <style jsx>{`
        
//       `}</style>
//     </>
//   )
// }

// export const getStaticProps: GetStaticProps<{ articles: Article[] }> = async (context) => {
//   const articles = getArticles('grammer');
//   return {
//     props: {
//       articles
//     }
//   };
// }