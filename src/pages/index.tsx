import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Tags } from "~/components/tags";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "~/constants/app";
import { Page } from "~/layouts/page";
import type { Post } from "~/types/post";
import { getLatestPosts, getOldPosts, getTags, getPostByPath } from "~/utils/api";
import { formatDate } from "~/utils/format";
import { markdownToHtml } from "~/utils/convert";
import { PostContent } from "~/components/post-content";
import { MathJaxTypeset } from "~/components/mathjaxtypeset";
import { MathJax } from "better-react-mathjax";


type Props = {
  tags: string[];
  latestPosts: Post[];
  oldPosts: Post[];
  intro: string;
  mathlabels: string[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [content, mathlabels] = await markdownToHtml(getPostByPath(`/2022/02/intro.md`).content);
  return {
    props: {
      tags: getTags(),
      latestPosts: getLatestPosts(),
      oldPosts: getOldPosts(),
      intro: content,
      mathlabels: mathlabels
    },
  };
};

export default function View(props: Props) {
  const [hideOldPosts, setHideOldPosts] = useState(true);
  const moreOldPosts = () => setHideOldPosts(false);

  return (
    <Page title="">
      <Head>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content={APP_URL} />
      </Head>
      <div>
      <span className='has-tooltip relative items-center'>
        <span className='flex tooltip balloon'>智識</span>
        Lumieres
      </span>
      <span className='has-tooltip relative items-center'>
        <span className='flex tooltip balloon'>矮小</span>
        Legeres
      </span>
      </div>
      <MathJax
            renderMode={"pre"}
            typesettingOptions={{ fn: "tex2chtml" }}
            text={`\\begin{align}x^4 = 100\\label{eq:ua}\\end{align}`}
      />
      <MathJax
            renderMode={"pre"}
            typesettingOptions={{ fn: "tex2chtml" }}
            text={`\\eqref{eq:ua}`}
            inline
      />
      <article>
        <MathJax hideUntilTypeset={"first"}>
          <MathJaxTypeset mathlabels={props.mathlabels}>
            <PostContent content={props.intro} />
          </MathJaxTypeset>
        </MathJax>
      </article>
      <h2 className="mb-5">Tags</h2>
      <Tags tags={props.tags} className="mb-14" />
      <h2 className="mb-5">Posts</h2>
      <ul>
        {props.latestPosts.map((post) => (
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
      {hideOldPosts && (
        <div className="text-center">
          <button
            onClick={moreOldPosts}
            className="px-5 py-1 text-gray-300 active:text-pink-500 bg-darkgreen rounded shadow-sm"
          >
            more old posts
          </button>
        </div>
      )}
      <ul style={{ display: hideOldPosts ? "none" : "block" }}>
        {props.oldPosts.map((post) => (
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
