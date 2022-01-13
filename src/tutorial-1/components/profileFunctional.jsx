import React from "react";

const ProfileFunctional = (props) => {
  const name = props.name.split(" ")[0];
  const date = props.registredAt.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="app">
      <div className="post">
        <p>
          Привет, <b>{name}</b>
        </p>
      </div>
      <div className="post__date">Дата регистрации: {date}</div>
    </div>
  );
};

export default ProfileFunctional;
