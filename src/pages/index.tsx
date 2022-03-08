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
import { MDXRemoteSerializeResult } from 'next-mdx-remote'


type Props = {
  tags: string[];
  latestPosts: Post[];
  oldPosts: Post[];
  intro: MDXRemoteSerializeResult;
  mathlabels: string[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [mdxSource, mathlabels] = await markdownToHtml(getPostByPath(`/2022/02/intro.md`).content);
  return {
    props: {
      tags: getTags(),
      latestPosts: getLatestPosts(),
      oldPosts: getOldPosts(),
      intro: mdxSource,
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
      />うおんぐえ
      <div>
      <MathJax hideUntilTypeset={"first"}>
          {`Inside a MathJax block element, one might use both Latex inline math, such
          as \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), but then also switch
          to Latex display math, like
          \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)\\]
          ... and then continue with inline math.\\(x\\)\\(\\pdv{f}{x}\\)
          \\begin{align}f(x)=y\\label{eq:a}\\tag{a}\\end{align}\\eqref{eq:a}
          \\begin{xy}*[white]\\xymatrix{G \\ar[d]_\\pi \\ar[r]^\\phi & H  \\\\G/\\operatorname{Ker}\\,\\phi \\ar@{.>}[ur]_\\psi}\\end{xy}
          `}
        </MathJax>
        </div>
      <article>
        <PostContent content={props.intro} mathlabels={props.mathlabels}/>
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
            className="px-5 py-1 text-gray-300 active:text-pink-500 bg-black rounded shadow-[0_0_16px_0_rgba(0,119,119,0.25)]"
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
