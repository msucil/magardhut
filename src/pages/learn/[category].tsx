import ArticleBrief from "@/components/articleBrief";
import PageHeader from "@/components/pageHeader";
import { Article, ArticleDetail, Category, getArticleDetail, getArticles, getCategories, getCategoryBySlug } from "@/lib/learn";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

//ref: https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript

interface CategoryParams extends ParsedUrlQuery {
    category: string
}

export default function CategoryPage({ record }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            {record &&
                <>
                    <Head>
                        <title>{`${record.title} | Magar Dhut`}</title>
                        <meta name="description" content={record.description} />
                    </Head>
                    <div className='min-vh-100 '>
                        <PageHeader title={record.title}
                            description={record.description}
                            background='bg-warning'></PageHeader>
                        <section className='container'>
                            <div className="row mt-5">
                                {record.articles?.map((a) => (
                                    <div className="col-md-6" key={a.id}>
                                        <ArticleBrief title={a.title} description={a.description || ''} date={a.date} url={`/learn/${record.slug}/${a.id}`}></ArticleBrief>
                                    </div>
                                )
                                )}
                            </div>
                        </section>
                    </div></>
            }
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async => {

    const slugs = getCategories().map((c) => ({ params: { category: c.slug } }));
    return {
        paths: slugs,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps<{ record?: Category }> = async (context) => {
    const { category } = context.params as CategoryParams;
    const record = getCategoryBySlug(category);

    if (record) {
        record.articles = getArticles(record)
    }

    return {
        props: {
            record
        }
    };

}