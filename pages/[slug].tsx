import Link from "next/link";
import { BlogPostsProps } from "@/lib/types";
import {
  getFiles,
  getPostBySlug,
  getAllPostsWithFrontMatter
} from "@/lib/utils";
import configureParser from "@tufte-markdown/parser";

const options = {
  react: false
};

const parse = configureParser(options);
const result = parse("## Heading **strong** *emphasis*");

const Patterns = ({ posts }: BlogPostsProps) => {
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
                  <p>[ {post.markdownBody} ]</p>
                </article>
              );
            })}
      </ul>
    </div>
  );
};

export default Patterns;

export async function getStaticPaths() {
  const posts = await getFiles();
  console.log("path", process.cwd());

  const paths = posts.map((filename: string) => ({
    params: {
      slug: filename.replace(/\.md/, "")
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const { frontMatter, markdownBody } = await getPostBySlug(params.slug);

  const posts = await getAllPostsWithFrontMatter();

  return {
    props: {
      posts,
      frontMatter,
      markdownBody
    }
  };
}
