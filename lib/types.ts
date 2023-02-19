export type BlogFrontMatter = {
  title: string;
  subtitle: string;
  section: string;
  publishedDate: string;
  tags: string[];
  contributors: string[];
};

export type BlogLayoutProps = {
  children: React.ReactNode;
  frontMatter: BlogFrontMatter;
  wordCount: number;
  readingTime: string;
};

export type BlogPostProps = {
  frontMatter: BlogFrontMatter;
  markdownBody: any;
  slug: string;
  siteTitle: string;
  wordCount: number;
  readingTime: string;
};

export type BlogPostsProps = {
  posts?: BlogPostProps[];
};

export interface BlogProps extends BlogPostsProps {
  title: string;
  description: string;
}
