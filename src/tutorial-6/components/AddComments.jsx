import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

export default function AddComments(props) {
  const paperStyle = {
    padding: "5px 20px",
    width: 380,
    margin: "20px auto",
  };
  const formStyle = { marginBottom: "10px" };

  let nums = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  const date = new Date().toLocaleDateString("ru-RU", nums);

  const handleClickSubmit = (e) => {
    e.preventDefault();
    props.setComments([
      ...props.comments,
      {
        fullName: e.target.fullName.value,
        email: e.target.email.value,
        createdAt: date,
        text: e.target.text.value,
      },
    ]);
    e.target.reset();
  };

  return (
    <Paper elevation={1} style={paperStyle}>
      <h3>
        <b>Обратная связь:</b>
      </h3>
      <form onSubmit={handleClickSubmit}>
        <TextField
          name="fullName"
          type="text"
          label="Имя"
          fullWidth
          style={formStyle}
          placeholder="Введите имя и фамилию"
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          fullWidth
          style={formStyle}
          placeholder="Введите ваш Email"
        />
        <TextField
          name="text"
          type="Message"
          label="Текст..."
          multiline
          rows={6}
          style={formStyle}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={formStyle}
        >
          Отправить
        </Button>
      </form>
    </Paper>
  );
}
