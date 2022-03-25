import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FullArticle } from "./components/FullArticle";
import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch";

function App() {
  const pathname = window.location.pathname;
  const postId = pathname.split("/").at(-1);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={"Login"} />
        <Route path="/post/:id" element={<FullArticle id={postId} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
