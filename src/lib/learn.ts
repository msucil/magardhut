import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";

export interface Article {
    id: string,
    title: string,
    slug: string,
    date: string,
    description?: string
    url?: string
}

export interface ArticleDetail extends Article {
    content: string
}

const rootDirectory = path.join(process.cwd(), 'data/learn');

export function getArticles(category: string): Article[] {
    const categoryDirectory = path.join(rootDirectory, category);

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
            category: matterResult.data.category,
            description: matterResult.data.description
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
        .use(remarkHtml, { sanitize: true })
        .process(markdown.content);
    const htmlContent = processedContent.toString();

    return {
        id: id,
        slug: markdown.data.slug,
        title: markdown.data.title,
        date: markdown.data.date,
        description: markdown.data.description,
        content: htmlContent
    }
};