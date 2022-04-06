import React from "react";
import avatar from "./assets/Owl.png";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <form className="app-form">
          <input
            className="app-form_input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button className="app-form_button">Найти</button>
        </form>
        <div className="app-user">
          <div className="app-user_info">
            <div className="app-user_image">
              <img src={avatar} alt="" />
            </div>
            <div className="app-user_data">
              <h1 className="app-user_name">
                Liam Sav <br />
                <span>@Isaev3-IV</span>
              </h1>
              <p className="app-user_about">
                Frontend Developer. UI Designer. JavaScript ❤️ ReactJS ⚛ React
                Native, NodeJS, PHP
              </p>
            </div>
          </div>
          <ul className="app-user_stats">
            <li className="app-user_stats-item">
              Репозитории <br />
              <span>124</span>
            </li>
            <li className="app-user_stats-item">
              Подписчиков <br />
              <span>1.2к</span>
            </li>
            <li className="app-user_stats-item">
              Звезд <br />
              <span>506</span>
            </li>
          </ul>
          <ul className="app-user_location">
            <li className="app-user_location-item">Russia, Moscow</li>
            <li className="app-user_location-item">
              https://github.com/Isaev3-IV
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;
