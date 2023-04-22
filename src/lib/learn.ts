import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeSanitize from "rehype-sanitize";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import emoji from 'remark-emoji';

export interface Category {
    title: string,
    description?: string
    slug: string
    articles?: Article[]
}

export interface Article {
    id: string,
    title: string,
    slug: string,
    date: string,
    description?: string
    url?: string,
    categorySlug?: string
}

export interface ArticleDetail extends Article {
    category: Category
    content: string
}

const categories: Category[] = [
    {
        title: 'व्याकरण',
        description: 'Learn how to read, write and speak with correct grammer in Magar Language (Dhut)',
        slug: 'grammer'
    },
    {
        title: 'शब्दावलीहरू',
        description: 'Learn Words to increase proficency in Magar Language',
        slug: 'vocabularies'
    },
    {
        title: 'मगर भाषामा शब्द निर्माण',
        description: 'Learn word formation',
        slug: 'words'
    },
    {
        title: 'कुराकानी',
        description: 'Learn word formation',
        slug: 'conversations'
    },

]

const rootDirectory = path.join(process.cwd(), 'data/learn');

export function getCategories(): Category[] {
    return categories;
}

export function getCategoryBySlug(slug: string) {
    return getCategories().find(c => c.slug === slug);
}

export function getArticlesSummary(): Article[] {
    const summaries = getCategories().map((c) => {
        return getArticles(c);
    })

    return summaries.flat(2);
}

export function getArticles(category: Category): Article[] {

    const slug = getCategories().find(c => c.slug === category.slug)?.slug || '';

    const categoryDirectory = path.join(rootDirectory, slug);

    const fileNames = fs.readdirSync(categoryDirectory);

    const articles = fileNames.map((fileName: string) => {

        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(categoryDirectory, fileName);

        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContent);

        return {
            id: id,
            slug: matterResult.data.slug,
            title: matterResult.data.title,
            date: matterResult.data.date,
            categorySlug: (getCategoryBySlug(matterResult.data.category) as Category).slug,
            description: matterResult.data.description as string
        }

    });

    return articles.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        else {
            return -1;
        }
    });
};

export async function getArticleDetail(category: string, id: string) {

    const filePath = path.join(rootDirectory, category, `${id}.md`);

    const content = fs.readFileSync(filePath, 'utf-8');

    const markdown = matter(content);

    const processedContent = await remark()
        .use(remarkGfm)
        .use(emoji)
        .use(remarkHtml, { sanitize: false })
        .process(markdown.content);

    const htmlContent = processedContent.toString();

    return {
        id: id,
        slug: markdown.data.slug as string,
        title: markdown.data.title,
        date: markdown.data.date,
        description: markdown.data.description,
        content: htmlContent,
        category: getCategoryBySlug(markdown.data.category) as Category
    }
};