import React from "react";

class ProfileClass extends React.Component {
  name = this.props.name.split(" ")[0];
  date = this.props.registredAt.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  render() {
    return (
      <div className="app">
        <div className="post">
          Привет, <b>{this.name}!</b>
        </div>
        <div className="post__date">Дата регистрации: {this.date} </div>
      </div>
    );
  }
}

export default ProfileClass;
