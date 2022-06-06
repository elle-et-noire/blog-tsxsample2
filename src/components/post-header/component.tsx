import { formatDate } from "~/utils/format";
import type { _Props } from "./types";
import { MathJax } from "better-react-mathjax";

export const Component: React.VFC<_Props> = (props) => (
  <header className="mb-8">
    <h1 className="mb-10 border-none">
      <MathJax hideUntilTypeset="first">
        {props.title}
      </MathJax>
    </h1>
    <div className="italic text-right text-sm text-gray-400">
      <time dateTime={props.date}>{formatDate(props.date)}</time>
    </div>
  </header>
);
