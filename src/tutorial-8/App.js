import React from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [fields, setFields] = React.useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleClickClear = () => {
    setFields({
      name: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  const handleClickRegister = () => {
    if (!fields.email.includes("@")) {
      alert("Почта неверная!");
      return;
    }
    if (fields.name.length < 2 || fields.lastName.length < 2) {
      alert("Почта или фамилия неверные!");
      return;
    }
    if (fields.password.length < 6) {
      alert("Пароль должен быть больше 6 символов!");
      return;
    }
    console.log(fields);
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const isValid =
    !!fields.name && !!fields.lastName && !!fields.email && !!fields.password;

  const disableClear =
    !!fields.name || !!fields.lastName || !!fields.email || !!fields.password;
  console.log(isValid);

  return (
    <>
      <div className="row">
        <TextField
          name="name"
          onChange={handleChangeInput}
          value={fields.name}
          label="Имя"
          variant="standard"
          fullWidth
        />
        <TextField
          name="lastName"
          onChange={handleChangeInput}
          value={fields.lastName}
          label="Фамилия"
          variant="standard"
          fullWidth
        />
      </div>
      <div className="row">
        <TextField
          name="email"
          onChange={handleChangeInput}
          value={fields.email}
          label="Email"
          variant="standard"
          fullWidth
        />
        <TextField
          name="password"
          onChange={handleChangeInput}
          value={fields.password}
          type="password"
          label="Пароль"
          variant="standard"
          fullWidth
        />
      </div>
      <br />

      <div className="row">
        <Button
          disabled={!isValid}
          onClick={handleClickRegister}
          variant="contained"
          color="success"
        >
          Регистрация
        </Button>
        <Button
          disabled={!disableClear}
          onClick={handleClickClear}
          variant="contained"
          color="error"
        >
          Очистить
        </Button>
      </div>
    </>
  );
}

export default App;
