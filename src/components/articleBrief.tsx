import { Article } from "@/lib/learn";
import Link from "next/link";

export interface ArticleProps {
    title: string,
    description: string,
    date: string,
    url: string
}

export default function ArticleBrief(article: ArticleProps) {
    return (
        <>
            <div className="p-4 border-0 bg-body border-end border-bottom border-secondary-subtle position-relative shadow mb-5">
                <div className="article-body">
                    <h4>
                        <Link className='text-decoration-none text-body stretched-link' href={article.url || ''}>{article.title}</Link>
                    </h4>
                    <div className="article-text">{article.description}</div>
                    <div className="text-body-secondary small lh-lg"><i className="bi bi-calendar-week"></i> {article.date}</div>
                </div>
            </div>
        </>
    )

}