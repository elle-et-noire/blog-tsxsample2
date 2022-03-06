import Head from "next/head";
import { HomeLink } from "~/components/home-link";
import { PostContent } from "~/components/post-content";
import { PostHeader } from "~/components/post-header";
import { APP_NAME, APP_URL } from "~/constants/app";
import { Page } from "~/layouts/page";
import type { Post } from "~/types/post";
import { getPosts, getPostByPath } from "~/utils/api";
import { markdownToHtml } from "~/utils/convert";
import { description } from "~/utils/meta";

type Props = {
  post: Post;
  mathlabels: string[];
};

type Params = {
  params: {
    year: string;
    month: string;
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const path = `${params.year}/${params.month}/${params.slug}.md`;
  const post = getPostByPath(path);
  const [mdxSource, mathlabels] = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post.data,
        mdxSource,
      },
      mathlabels
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: getPosts().map((post) => ({
      params: {
        year: post.year,
        month: post.month,
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export default function View(props: Props) {
  const _description = description(props.post.mdxSource.compiledSource);

  return (
    <Page title={props.post.title}>
      <Head>
        <meta name="description" content={_description} />
        <meta
          property="og:title"
          content={`${props.post.title} ･ ${APP_NAME}`}
        />
        <meta property="og:description" content={_description} />
        <meta
          property="og:url"
          content={`${APP_URL}${props.post.year}/${props.post.month}/${props.post.slug}`}
        />
      </Head>
      <article>
        <PostHeader title={props.post.title} date={props.post.date} />
        <PostContent content={props.post.mdxSource} mathlabels={props.mathlabels}/>
        <p className="mt-16 text-center">
          <HomeLink />
        </p>
      </article>
    </Page>
  );
}
