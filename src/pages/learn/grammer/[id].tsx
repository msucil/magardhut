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
                <section className='col-md-12 bg-warning mb-3' style={{ height: ' 25vh !important' }}>
                    <section className='text-center p-5'>
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                    </section>

                </section>
                <div className='container'>
                    <div dangerouslySetInnerHTML={{ __html: article?.content || '' }}>
                    </div>
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