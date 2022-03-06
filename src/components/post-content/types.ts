import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Props = {
  content: MDXRemoteSerializeResult;
  mathlabels: string[];
};

export type _Props = Props;
