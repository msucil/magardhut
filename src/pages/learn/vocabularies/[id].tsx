
import PageDetail from "@/components/page-detail/page-detail";
import { ArticleDetail, getArticleDetail, getArticles } from "@/lib/learn";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

const category = 'vocabularies';

//ref: https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript

export default function ArticleDetail({ article }: InferGetStaticPropsType<typeof getStaticProps>) {
    const breadCrumbs = [
        {
            title: 'Home',
            href: '/',
            active: false,
        },
        {
            title: `${article.category}`,
            href: `/learn/${article.category}`,
            active: false,
        }
    ]

    return (
        <>
            <Head>
                <title>{`${article.title} | Grammer | Magar Dhut`}</title>
                <meta name="description" content={article.description} />
            </Head>
            <PageDetail article={article} breadcrumbs={breadCrumbs} ></PageDetail>
        </>);
}

export const getStaticPaths: GetStaticPaths = async => {
    const articles = getArticles(category);
    const ids = articles.map((a) => ({ params: { id: a.id } }));
    return {
        paths: ids,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps<{ article: ArticleDetail }> = async (context) => {
    const { id } = context.params as ArticleParams;
    const article = await getArticleDetail(category, id);

    return {
        props: {
            article
        }
    };

}

interface ArticleParams extends ParsedUrlQuery {
    id: string
}