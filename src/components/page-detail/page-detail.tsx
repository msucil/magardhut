import { ArticleDetail } from "@/lib/learn";
import styles from './page-detail.module.scss'
import Link from "next/link";
import { InlineReactionButtons } from "sharethis-reactjs";
import Script from "next/script";

export interface ArticleDetailProps {

    article: ArticleDetail
    breadcrumbs: BreadcrumbProps[],
    background?: string
}

export interface BreadcrumbProps {
    title: string,
    href: string,
    active: boolean
}

export default function ContentDetail({ article, breadcrumbs, background }: ArticleDetailProps) {
    return (
        <>
            <div className='min-vh-100 '>
                <section className={`${background ?? 'bg-warning'} mb-3 d-flex`}>
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
                                        <li key={b.title} className={`${b.active ?? 'active'} breadcrumb-item`}>
                                            <Link className=" link-underline-opacity-0 link-secondary link-offset-2-hover link-underline-opacity-75-hover" href={b.href}>{b.title}</Link>
                                        </li>
                                    </>
                                )}
                            </ol>
                        </nav>
                        <div dangerouslySetInnerHTML={{ __html: article?.content || '' }}>
                        </div>
                        <hr/>
                        <div id="disqus_thread"></div>

                    </article>
                </div>
            </div>

            <Script id="disqusComment" type="text/javascript"  strategy="lazyOnload">
                {`
    
                const disqus_config = function () {
                    this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = ${article.category.slug + '-' + article.slug}; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                 };

                (function() { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                            s.src = 'https://magardhut.disqus.com/embed.js';
                            s.setAttribute('data-timestamp', +new Date());
                            (d.head || d.body).appendChild(s);
                    })();
                `}
            </Script>
        </>
    );
}