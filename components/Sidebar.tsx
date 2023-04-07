import React from "react";
import Link from "next/link";
import { BlogPostsProps } from "@/lib/types";

export default function Sidebar({ posts }: BlogPostsProps) {
  return (
    <div className="sticky top-0 col-span-3 h-screen w-3/12 border-r px-8">
      <p className=" my-20   text-[60px]">S</p>
      {posts &&
        posts
          .sort(
            (a, b) =>
              new Date(b.frontMatter.publishedDate).getTime() -
              new Date(a.frontMatter.publishedDate).getTime()
          )
          .map((post) => {
            return (
              <div>
                <div key={post.slug} className="my-8">
                  <h1 className="text-[20px] my-2">{post.frontMatter.title}</h1>

                  <h2 className="text-[15px] my-0">
                    {post.frontMatter.subtitle}
                  </h2>
                </div>
              </div>
            );
          })}
    </div>
  );
}
