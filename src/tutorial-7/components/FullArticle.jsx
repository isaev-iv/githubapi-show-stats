import React from "react";
import { Button } from "react-bootstrap";

export const FullArticle = ({ id }) => {
  return (
    <div>
      <h1>Статья №{id}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
        aliquam amet asperiores aut eius minima, nemo nostrum perspiciatis
        praesentium rerum tempora temporibus vero. Fugiat illo labore maiores
        quam sit?
      </p>
      <a href="/">
        <Button>Назад</Button>
      </a>
    </div>
  );
};
