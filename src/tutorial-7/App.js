import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { FullArticle } from "./components/FullArticle";
import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch";
import "./index.css";

function App() {
  const pathname = window.location.pathname;
  const postId = pathname.split("/").at(-1);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/post/:id" element={<FullArticle id={postId} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
