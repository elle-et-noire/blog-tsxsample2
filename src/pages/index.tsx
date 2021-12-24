import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Tags } from "~/components/tags";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
import { Page } from "~/layouts/page";
import type { Post } from "~/types/post";
import { getPosts, getTags } from "~/utils/api";
import { formatDate } from "~/utils/format";

type Props = {
  posts: Post[];
  tags: string[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: getPosts(),
      tags: getTags(),
    },
  };
};

export default function View(props: Props) {
  return (
    <Page title="">
      <Head>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={APP_URL} />
      </Head>
      <h2 className="mb-5">Tags</h2>
      <Tags tags={props.tags} className="mb-14" />
      <h2 className="mb-5">Posts</h2>
      <ul>
        {props.posts.map((post) => (
          <li key={post.slug} className="mb-6">
            <div className="italic text-xs text-gray-400">
              {formatDate(post.date)}
            </div>
            <Link href={`/${post.year}/${post.month}/${post.slug}`}>
              <a className="font-semibold">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}
