import type { _Props } from "./types";
import React, { useContext, useRef, useEffect, ReactNode, ReactChildren } from "react";
import { MathJaxBaseContext, MathJax3Object, MathJax } from "better-react-mathjax";
import { MDXRemote } from 'next-mdx-remote'

const isMathJax3Object = (mjObject: any): mjObject is MathJax3Object => {
  return !!(mjObject as MathJax3Object)?.startup
}

export const Component: React.VFC<_Props> = (props) => {
  const mjContext = useContext(MathJaxBaseContext);
  const mathBlock = useRef(null);
  useEffect(() => {
    if (mjContext && mathBlock.current) {
      mjContext.promise.then((mathJax) => {
        if (isMathJax3Object(mathJax)) {
          mathJax.startup.promise.then(() => {
            mathJax.texReset();
            props.mathlabels.forEach(mathlabel => {
              const mathlinks = Array.from(document.querySelectorAll(`a[href="#mjx-eqn%3A${encodeURIComponent(mathlabel)}"]`));
              const modal = document.getElementById(`preview-mjx-${encodeURIComponent(mathlabel)}`);
              if (modal != null) {
                for (const ml of mathlinks) {
                  ml.addEventListener('mouseenter', function () {
                    modal.style.visibility = 'visible';
                    modal.style.opacity = '100';
                    modal.style.transitionDelay = '0.7s';
                  });
                  ml.addEventListener('mouseleave', function () {
                    modal.style.visibility = '';
                    modal.style.opacity = '';
                    modal.style.transitionDelay = '0s';
                  })
                }
              }
            });
            document.querySelectorAll<HTMLElement>(`mjx-container[jax="SVG"] > svg a`).forEach(ref => {
              ref.style.fill = '#f0f6fc';
              ref.style.stroke = '#f0f6fc';
            })
          });
        }
      });
    }
  });

  const MDXComponents = {};

  return (
    <MathJax hideUntilTypeset={"first"}>
      <div ref={mathBlock} className="post">
        <MDXRemote {...props.content} components={MDXComponents} />
      </div>
    </MathJax>
  );
}