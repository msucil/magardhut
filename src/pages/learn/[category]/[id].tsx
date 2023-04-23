import PageDetail from "@/components/page-detail/page-detail";
import { APP_ENG_TITLE, APP_KEYWORDS, APP_TITLE } from "@/lib/constants";
import { ArticleDetail, getArticleDetail, getArticlesSummary } from "@/lib/learn";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";


//ref: https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript

export default function ArticleDetail({ article }: InferGetStaticPropsType<typeof getStaticProps>) {
    const breadCrumbs = [
        {
            title: 'मगर ढूट',
            href: '/',
            active: false,
        },
        {
            title: `${article.category.title}`,
            href: `/learn/${article.category.slug}`,
            active: false,
        }
    ]

    return (
        <>
            <Head>
                <title>{`${article.title} | ${article.category.title} | ${APP_TITLE} | (${APP_ENG_TITLE})`}</title>
                <meta name="description" content={article.seoDescription ?? article.description} />
                <meta name="title" content= {article.seoTitle ?? article.title} />
                <meta name="keywords" content={APP_KEYWORDS} />
            </Head>
            <PageDetail article={article} breadcrumbs={breadCrumbs} ></PageDetail>
        </>);
}

export const getStaticPaths: GetStaticPaths = async => {
    const summaries = getArticlesSummary();

    const params = summaries.map((s) => ({params: {category: s.categorySlug, id: s.id}}));

    return {
        paths: params,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps<{ article: ArticleDetail }> = async (context) => {
    const { category, id } = context.params as ArticleParams;
    const article = await getArticleDetail(category, id);

    return {
        props: {
            article
        }
    };
}

interface ArticleParams extends ParsedUrlQuery {
    category: string,
    id: string
}