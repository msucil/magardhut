import { ArticleDetail } from "@/lib/learn";
import styles from './page-detail.module.scss'
import Link from "next/link";

export interface ArticleDetailProps {

    article: ArticleDetail

    breadcrumbs: BreadcrumbProps[]

}

export interface BreadcrumbProps {
    title: string,
    href: string,
    active: boolean
}

export default function ContentDetail({ article, breadcrumbs }: ArticleDetailProps) {
    return (
        <>
            <div className='min-vh-100 '>
                <section className='bg-warning mb-3 d-flex'>
                    <div className={styles['page-content-header']}>
                        <h1 className={styles['page-content-title']}>{article.title}</h1>
                        <h4>{article.description}</h4>
                    </div>
                </section>
                <div className='container'>
                    <article id={styles.contentDetail} className="bg-body shadow boarder-0 boarder-end boarder-bottom ps-5 pt-3 pe-5 pb-5 " >

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                {breadcrumbs.map((b) =>
                                    <>
                                        <li className={`${b.active ?? 'active'} breadcrumb-item`}>
                                            <Link className=" link-underline-opacity-0 link-secondary link-offset-2-hover link-underline-opacity-75-hover" href={b.href}>{b.title}</Link>
                                        </li>

                                    </>
                                )}
                            </ol>
                        </nav>
                        <div dangerouslySetInnerHTML={{ __html: article?.content || '' }}>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}