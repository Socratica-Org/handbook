import React from "react";
import Link from "next/link";
import { BlogPostsProps } from "@/lib/types";

export default function Sidebar({ posts }: BlogPostsProps) {
  return (
    <section className="w-1/4 max-w-[300px] min-w-[15vw] min-h-[100vh] border-r py-4 mx-4 ">
      {posts &&
        posts
          .sort(
            (a, b) =>
              new Date(b.frontMatter.publishedDate).getTime() -
              new Date(a.frontMatter.publishedDate).getTime()
          )
          .map((post) => {
            return (
              <article key={post.slug} className="post-title">
                <Link href={{ pathname: `/${post.slug}` }}>
                  {post.frontMatter.title}
                </Link>{" "}
                - {post.frontMatter.subtitle}
                <p>[ {post.frontMatter.tags.join(", ")} ]</p>
              </article>
            );
          })}
    </section>
  );
}
