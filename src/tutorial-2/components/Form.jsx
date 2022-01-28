import React from "react";

const Form = () => {
  let email = null;
  let password = null;

  const detectChange = (event) => {
    if (event.target.name === "email") {
      email = event.target.value.trim();
    }
    if (event.target.name === "password") {
      password = event.target.value.trim();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      console.log({ email, password });
      email = "";
      password = "";
      event.target.reset();
    } else {
      alert("Заполните поля!");
    }
    // if (!email && !password) {
    //   console.log("Заполните поля!");
    // } else {
    //   console.log({ email, password });
    //   email = null;
    //   password = null;
    //   event.target.reset();
    // }
  };

  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={detectChange}
          type="text"
          className="post__login"
          placeholder="E-mail"
        />
        <input
          name="password"
          onChange={detectChange}
          className="post__pass"
          type="password"
          placeholder="Пароль"
        />
        <button type="submit" className="post__button">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Form;
