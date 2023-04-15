import { ArticleDetail, getArticleDetail, getArticles } from "@/lib/learn";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

//ref: https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript

export default function ArticleDetail({ article }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>{`${article.title} | Grammer | Magar Dhut`}</title>
                <meta name="description" content={article.description} />
            </Head>
            <div className='min-vh-100 '>
                <section className='bg-warning mb-3 d-flex'>
                    <div className='text-center' style={{ width: '100%', marginTop: '6rem', marginBottom: '8rem' }}>
                        <h1 style={{ textShadow: '1px 2px 2px BLACK', fontSize: '5rem' }}>{article.title}</h1>
                        <h4>{article.description}</h4>
                    </div>
                </section>
                <div className='container'>
                    <article>
                        <div dangerouslySetInnerHTML={{ __html: article?.content || '' }}>
                        </div>
                    </article>
                </div>
            </div>
        </>);
}

export const getStaticPaths: GetStaticPaths = async => {
    const articles = getArticles('grammer');
    const ids = articles.map((a) => ({ params: { id: a.id } }));
    return {
        paths: ids,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps<{ article: ArticleDetail }> = async (context) => {
    const { id } = context.params as ArticleParams;
    const article = await getArticleDetail('grammer', id);

    return {
        props: {
            article
        }
    };

}

interface ArticleParams extends ParsedUrlQuery {
    id: string
}