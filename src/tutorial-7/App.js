import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FullArticle } from "./components/FullArticle";

function App() {
  const pathname = window.location.pathname;
  const postId = pathname.split("/").at(-1);

  return (
    <>
      <Header />
      {pathname === "/" && <Home />}
      {pathname === "/about" && <About />}
      {pathname === "/login" && <h3>Login</h3>}
      {pathname === `/post/${postId}` && <FullArticle id={postId} />}
      <Footer />
    </>
  );
}

export default App;
