import React from "react";
import Link from "next/link";
import { BlogPostsProps } from "@/lib/types";

export default function Sidebar({ posts }: BlogPostsProps) {
  return (
    <div className="sticky top-0 col-span-3 h-screen w-3/12 border-r px-8">
      <img src="/orbit-full.png" className="relative block inline" />
      {posts &&
        posts
          .sort(
            (a, b) =>
              new Date(b.frontMatter.publishedDate).getTime() -
              new Date(a.frontMatter.publishedDate).getTime()
          )
          .map((post) => {
            return (
              <div key={post.slug} className="post-title">
                <Link href={{ pathname: `/${post.slug}` }}>
                  {post.frontMatter.title}
                </Link>{" "}
                - {post.frontMatter.subtitle}
              </div>
            );
          })}
    </div>
  );
}
