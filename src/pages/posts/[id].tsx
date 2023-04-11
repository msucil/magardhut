import { Post, getPost, getSortedPostsData } from "@/lib/posts";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <h1>Post</h1>

            <div>
                <h3>{post.title}</h3>
                <h4>{post.date}</h4>
                <div dangerouslySetInnerHTML={{ __html: post?.content || '' }}>
                </div>
            </div>
        </>);
}

export const getStaticPaths: GetStaticPaths = async => {
    const posts = getSortedPostsData();
    const ids = posts.map((p) => ({ params: { id: p.id } }));
    return {
        paths: ids,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps<{ post: Post }> = async (context) => {
    const { id } = context.params as PostParams;
    const post = await getPost(id);

    return {
        props: {
            post
        }
    };

}

interface PostParams extends ParsedUrlQuery {
    id: string
}