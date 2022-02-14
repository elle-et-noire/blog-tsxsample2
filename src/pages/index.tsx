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
import { Tooltip } from "~/components/tooltip"
import B from '~/utils/basepath';

type Props = {
  tags: string[];
  latestPosts: Post[];
  oldPosts: Post[];
  intro: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const content = await markdownToHtml(getPostByPath(`/2022/02/intro.md`).content);
  return {
    props: {
      tags: getTags(),
      latestPosts: getLatestPosts(),
      oldPosts: getOldPosts(),
      intro: content
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
      うおおおおお<Tooltip tooltipText="ツールチップの文言だよぶらぶらぶら">アイコンとか</Tooltip>うおおおおおおお
      うおおおおお<Tooltip tooltipText="ツールチップの文言だよぶらぶらぶら">アイコンとか</Tooltip>うおおおおおおお
      うおおおおお<Tooltip tooltipText="ツールチップの文言だよぶらぶらぶら">アイコンとか</Tooltip>うおおおおおおお
      うおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお<br />
      うおおおおお<span className='has-tooltip relative items-center'>
        <span className='flex tooltip balloon'><p>Some Nice Tooltip Text<br/>ゲルフォントシュナイダーくぁｗせｄｒｆｔｇｙふじこｌｐ；くぁｗせｄｒｆｔｇｙふじこｌｐ；くぁｗせｄｒｆｔｇｙふじこｌｐ；</p></span>
        Custom Position (above)
      </span>うおおおおおおおお$a=b$
      うおおおおお<span className='has-tooltip relative items-center'>
        <span className='flex tooltip balloon'>Some Nice Tooltip Text</span>
        Custom Position (above)
      </span>うおおおおおおおお$a=b$
      うおおおおお<span className='has-tooltip relative items-center'>
        <span className='flex tooltip balloon'>Some Nice Tooltip Text</span>
        Custom Position (above)
        </span>うおおおおおおおお$a=b$
        </div>
      <article>
        <PostContent content={props.intro} />
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
