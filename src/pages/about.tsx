import { APP_ENG_TITLE, APP_KEYWORDS, APP_TITLE } from "@/lib/constants";
import Head from "next/head";
import path from "path";
import { ArticleDetail, Category } from "@/lib/learn";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import emoji from 'remark-emoji';
import PageDetail from "@/components/page-detail/page-detail";

const breadCrumbs = [
    {
        title: 'मगर ढूट',
        href: '/',
        active: false,
    },
    {
        title: `हाम्रो बारेमा`,
        href: `/about`,
        active: true,
    }
]

function About({ article }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>{`हाम्रो बारेमा | ${APP_TITLE} | ${APP_ENG_TITLE}`}</title>
                <meta name="description" content='' />
                <meta name="title" content={`हाम्रो बारेमा | ${APP_TITLE} | ${APP_ENG_TITLE}`} />
                <meta name="keywords" content={APP_KEYWORDS} />
            </Head>
            <PageDetail article={article} breadcrumbs={breadCrumbs} background="bg-secondary"></PageDetail>
        </>
    )
}

const filePath = path.join(process.cwd(), 'data/about.md');


export const getStaticProps: GetStaticProps<{ article: ArticleDetail }> = async (context) => {

    const content = fs.readFileSync(filePath, 'utf-8');

    const markdown = matter(content);

    const processedContent = await remark()
        .use(remarkGfm)
        .use(emoji)
        .use(remarkHtml, { sanitize: false })
        .process(markdown.content);

    const htmlContent = processedContent.toString();

    const article = {
        id: 'हाम्रो-बारेमा',
        slug: markdown.data.slug as string,
        title: markdown.data.title,
        date: markdown.data.date,
        description: markdown.data.description || null,
        content: htmlContent,
        category: { title: 'हाम्रो बारेमा', slug: 'about' } as Category,
        seoTitle: markdown.data.seoTitle || null,
        seoDescription: markdown.data.seoDescription || null
    } as ArticleDetail;

    return {
        props: {
            article
        }
    };
}


export default About;