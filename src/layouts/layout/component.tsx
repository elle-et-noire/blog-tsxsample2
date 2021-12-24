import { Copyright } from "~/layouts/copyright";
import { Footer } from "~/layouts/footer";
import { Header } from "~/layouts/header";
import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto pt-28 pb-10">
      {props.children}
    </main>
    {props.isPost && <Copyright />}
    <Footer />
  </div>
);
