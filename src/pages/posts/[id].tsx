import { getPost, getSortedPostsData } from "@/lib/posts";

export default function Post({ post }) {
    return (
        <>
            <h1>Post</h1>

            <div>
                <h3>{post.title}</h3>
                <h4>{post.date}</h4>
                <div dangerouslySetInnerHTML={{ __html: post.htmlContent }}>
                </div>
            </div>
        </>);
}

export async function getStaticPaths() {
    const posts = getSortedPostsData();
    const ids = posts.map((p) => ({ params: { id: p.id } }));
    return {
        paths: ids,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const post = await getPost(params.id);
    console.log('post', post);

    return {
        props: {
            post
        }
    };

}