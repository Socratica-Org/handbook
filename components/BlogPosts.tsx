import Link from "next/link";
import { BlogPostsProps } from "@/lib/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPosts({ posts }: BlogPostsProps) {
  console.log(posts);
  return (
    <div className="posts">
      {!posts && <div>No posts!</div>}
      <ul>
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
                  <div>
                    <ReactMarkdown
                      children={post.markdownBody}
                      remarkPlugins={[remarkGfm]}
                    />
                  </div>
                </article>
              );
            })}
      </ul>
    </div>
  );
}
