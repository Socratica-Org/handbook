import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import BlogPosts from "@/components/BlogPosts";
import Sidebar from "@/components/Sidebar";

import { BlogFrontMatter } from "@/lib/types";
import { getAllPostsWithFrontMatter } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ title, posts }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Spearheaded by Socratica Waterloo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="inline-block flex">
        <Sidebar posts={posts} />

        <section className="">
          <BlogPosts posts={posts} />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsWithFrontMatter();

  return {
    props: {
      posts,
      title: "Socratica Patterns",
      description: "Open sourced community building"
    }
  };
}
