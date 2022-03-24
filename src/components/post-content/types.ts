import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Props = {
  content: MDXRemoteSerializeResult;
  mathblocks: string[];
};

export type _Props = Props;
