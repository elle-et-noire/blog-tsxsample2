import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Props = {
  content: MDXRemoteSerializeResult;
  mathblocks: { [label: string]: string };
};

export type _Props = Props;
