import { Component } from "./component";

export const Copyright: React.VFC = () => {
  const copyright = `\u00a9 ${new Date().getFullYear()} @L48610`;

  return <Component copyright={copyright} />;
};
