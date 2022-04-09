import React from "react";

export const UserNotFound = ({ data }) => {
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_data">
          <h1 className="app-user_name">Пользователь не найден</h1>
        </div>
      </div>
    </div>
  );
};
