import Head from "next/head";
import { HomeLink } from "~/components/home-link";
import { PostContent } from "~/components/post-content";
import { PostHeader } from "~/components/post-header";
import { APP_NAME, APP_URL, APP_DESCRIPTION } from "~/constants/app";
import { Page } from "~/layouts/page";
import type { Post } from "~/types/post";
import { getPosts, getPostByPath } from "~/utils/api";
import { markdownToHtml } from "~/utils/convert";
// import { APP_DESCRIPTION } from "~/constants/app";

type Props = {
  post: Post;
  mathblocks: string[];
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
  let post = getPostByPath(path);
  if (!post.data.description) post.data.description = APP_DESCRIPTION;
  const [mdxSource, mathblocks] = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post.data,
        mdxSource,
      },
      mathblocks
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
  return (
    <Page title={props.post.title}>
      <Head>
        <meta name="description" content={props.post.description} />
        <meta
          property="og:title"
          content={`${props.post.title} ･ ${APP_NAME}`}
        />
        <meta property="og:description" content={props.post.description} />
        <meta
          property="og:url"
          content={`${APP_URL}${props.post.year}/${props.post.month}/${props.post.slug}`}
        />
      </Head>
      <article>
        <PostHeader title={props.post.title} date={props.post.date} />
        <PostContent content={props.post.mdxSource} mathblocks={props.mathblocks}/>
        <p className="mt-16 text-center">
          <HomeLink />
        </p>
      </article>
    </Page>
  );
}
