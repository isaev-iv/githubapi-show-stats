import React from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };
  const handleClickClear = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="App">
        <div className="row">
          <TextField
            name="firstName"
            label="Имя"
            {...register("name", {
              required: "Это обязательное поле!",
              minLength: {
                value: 2,
                message: "Минимум 2 символа.",
              },
            })}
            helperText={errors?.name && errors?.name.message}
            error={!!errors?.name}
            fullWidth
          />

          <TextField
            name="lastName"
            label="Фамилия"
            {...register("lastName", {
              required: "Это обязательное поле!",
              minLength: {
                value: 3,
                message: "Минимум 3 символа.",
              },
            })}
            helperText={errors?.lastName && errors?.lastName.message}
            error={!!errors?.lastName}
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            name="email"
            label="E-Mail"
            defaultValue=""
            {...register("email", {
              required: "Это обязательное поле!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Неккоретный E-mail",
              },
            })}
            helperText={errors?.email && errors?.email.message}
            error={!!errors?.email}
            fullWidth
          />

          <TextField
            name="password"
            type="password"
            label="Пароль"
            {...register("password", {
              required: "Это обязательное поле!",
              minLength: {
                value: 6,
                message: "Минимум 6 символов.",
              },
            })}
            helperText={errors?.password && errors?.password.message}
            error={!!errors?.password}
            fullWidth
          />
        </div>

        <div className="row">
          <TextField name="about" label="Обо мне" fullWidth />
        </div>
        <br />
        <div className="row">
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={handleClickClear}
            variant="contained"
            color="secondary"
          >
            Очистить
          </Button>
        </div>
      </div>
    </form>
  );
}

export default App;
