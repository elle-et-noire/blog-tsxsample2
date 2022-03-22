import type { _Props } from "./types";
import { useRef } from "react";

export const Component: React.VFC<_Props> = (props) => {
  // ツールチップの文言自体のためのref
  const ref = useRef<HTMLDivElement>(null);

  // マウスが乗ったらツールチップを表示
  const handleMouseEnter = () => {
    if (!ref.current) return;
    ref.current.style.opacity = "1";
    ref.current.style.visibility = "visible";
  };
  // マウスが離れたらツールチップを非表示
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.opacity = "0";
    ref.current.style.visibility = "hidden";
  };

  return (
      <span className="relative items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span
          className="flex before:block absolute before:absolute top-full before:-top-1 left-1/2 before:left-1/2 invisible z-10 before:z-0 items-center py-[2px] px-2 mx-auto mt-2 before:w-2 before:h-2 text-xs text-white whitespace-nowrap before:bg-black bg-black rounded transition-all delay-300 duration-150 transform before:transform before:rotate-45 -translate-x-1/2 before:-translate-x-1/2"
          ref={ref}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.tooltipText}
        </span>
        {props.children}
      </span>
  );
};
