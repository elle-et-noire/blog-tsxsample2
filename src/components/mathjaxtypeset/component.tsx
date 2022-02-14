import type { _Props } from "./types";
import React, { useContext, useRef, useEffect } from "react";
import { MathJaxContext, MathJaxBaseContext } from "better-react-mathjax";

export const Component: React.VFC<_Props> = (props) => {
  const mjContext = useContext(MathJaxBaseContext);
  const mathBlock = useRef(null);

  useEffect(() => {
    if (mjContext && mathBlock.current) {
      mjContext.promise.then((mathJax) => {
        mathJax.startup.promise.then(() => {
          mathJax.texReset();
          mathJax.typesetClear([mathBlock.current]);
          mathJax.typesetPromise([mathBlock.current]);
        });
      });
    }
  });

  return (
    <div ref={mathBlock}>
      {/* {"$$\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)$$"} */}
      {props.children}
    </div>
  );
}

