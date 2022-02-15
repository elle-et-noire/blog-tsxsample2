import type { _Props } from "./types";
import React, { useContext, useRef, useEffect } from "react";
import { MathJaxBaseContext, MathJax3Object } from "better-react-mathjax";

const isMathJax3Object = (mjObject: any): mjObject is MathJax3Object => {
  // Weapon型に強制キャストしてatackプロパティがあればWeapon型とする
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
            mathJax.typesetClear([mathBlock.current]);
            mathJax.typesetPromise([mathBlock.current]);
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

