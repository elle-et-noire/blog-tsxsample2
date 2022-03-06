import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Post = {
  title: string;
  date: string;
  year: string;
  month: string;
  slug: string;
  mdxSource: MDXRemoteSerializeResult;
  tags: string[];
};
