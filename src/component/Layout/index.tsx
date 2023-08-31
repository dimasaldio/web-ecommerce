import React, { ReactNode } from "react";
import Navbar from "./Header";
import Footer from "./Footer";

interface ILayout {
  children: ReactNode;
}

export default function Layout(props: ILayout) {
  return (
    <div className="bg-white">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
