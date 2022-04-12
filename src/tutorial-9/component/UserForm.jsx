import React from "react";

export const UserForm = ({ data }) => {
  const {
    avatar_url,
    name,
    login,
    bio,
    following,
    followers,
    public_repos,
    location,
    blog,
  } = data;
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={avatar_url} alt="" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {name} <br />
            <span>{login}</span>
          </h1>
          <p className="app-user_about">{bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Подписок <br />
          <span>{following}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков <br />
          <span>{followers}</span>
        </li>
        <li className="app-user_stats-item">
          Публичные репозитории <br />
          <span>{public_repos}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{location}</li>
        <li className="app-user_location-item">{blog}</li>
      </ul>
    </div>
  );
};
