import React from "react";
import Link from "next/link";
import { BlogPostsProps } from "@/lib/types";

export default function Selections({ posts }: BlogPostsProps) {
  return (
    <section className="sticky top-0 h-screen w-3/12 justify-center ">
      <div className="border rounded-md p-4">
        <p className="mt-0">Selections</p>
        <ol>
          <li>List Item 1</li>
          <li>List Item 1</li>
        </ol>
      </div>
      <a className="p-2 border absolute right-0 ">Export</a>
    </section>
  );
}
