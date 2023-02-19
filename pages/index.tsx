import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import BlogPosts from "@/components/BlogPosts";
import Sidebar from "@/components/Sidebar";
import Selections from "@/components/Selections";

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

      <div className="container relative flex space-x-4">
        <Sidebar posts={posts} />

        <section className="h-full w-9/12 space-y-56 p-4">
          <div className="min-h-[50vh] relative">
            <img src="/orbit-full.png" className="relative block inline" />
            <h1 className="absolute bottom-80 right-20">Socratica Patterns</h1>
          </div>

          <BlogPosts posts={posts} />
        </section>
        <Selections posts={posts} />
      </div>
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
