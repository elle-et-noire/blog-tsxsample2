import type { _Props } from "./types";
import React, { useContext, useRef, useEffect } from "react";
import { MathJaxBaseContext, MathJax3Object } from "better-react-mathjax";

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
            // mathJax.typesetClear([mathBlock.current]);
            // mathJax.typesetPromise([mathBlock.current]);
            const mathlinks = Array.from(document.querySelectorAll('a[href="#mjx-eqn%3Aeq%3A1"]'));
            const modal = document.getElementById('preview-mjx-eqn%3Aeq%3A1');
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
        }
      });
    }
  });

  return (
    <div ref={mathBlock}>
      {props.children}
    </div>
  );
}

