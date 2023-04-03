import Layout from "@/components/layout/layout";
import Head from "next/head";
import Link from "next/link";

function About(){
    return (
        <>
        <Layout>
            <Head>
                <title>About Page</title>
            </Head>
        <h1>About Page</h1>
        <div>
            <Link href={"/"}> Back to Home</Link>
        </div>
        </Layout>
        
        </>
    )
}

export default About;