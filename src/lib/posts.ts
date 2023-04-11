import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): Post[] {
    const fileNames = fs.readdirSync(postDirectory);
    const posts = fileNames.map((fileName: string) => {

        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postDirectory, fileName);

        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContent);

        return {
            id: id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        }
        
    });

    return posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        else {
            return -1;
        }
    });
};

export async function getPost(id: string) {
    const filePath = path.join(postDirectory, `${id}.md`);
    const content = fs.readFileSync(filePath, 'utf-8');

    const markdown = matter(content);
    
    const processedContent = await remark()
        .use(remarkHtml, {sanitize: true})
        .process(markdown.content);
    const htmlContent = processedContent.toString();

    return {
        id: id,
        content: htmlContent,
        title: markdown.data.title,
        date: markdown.data.date
    }
};

export interface Post {
    id: string;
    title: string;
    date: string;
    content?: string;
}