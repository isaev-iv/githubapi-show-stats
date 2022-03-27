import React from "react";
import { Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { posts } from "../pages/Home";
import { NoMatch } from "../pages/NoMatch";

export const FullArticle = () => {
  const { id } = useParams();
  const post = posts.find((obj) => obj.id === +id);

  if (!post) {
    return <NoMatch />;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt="" />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
