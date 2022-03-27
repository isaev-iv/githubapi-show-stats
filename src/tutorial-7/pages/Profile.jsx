import React from "react";
import { Navigate } from "react-router-dom";

export const Profile = () => {
  if (!window.localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <img src="https://source.unsplash.com/200x200" alt="About" />
      <p>Это закрытый профиль пользователя</p>
    </>
  );
};
