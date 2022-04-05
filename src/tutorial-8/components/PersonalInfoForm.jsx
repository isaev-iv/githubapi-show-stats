import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const schema = yup.object().shape({
  name: yup.string().min(2, "Слишком короткое имя"),
  lastName: yup.string().min(3, "Слишком короткое имя"),
  email: yup.string().email("Неверный email").required("Укажите почту"),
  password: yup
    .string()
    .min(6, "Слишком короткое имя")
    .required("Это обязательное поле!"),
});

const PersonalInfoForm = ({ nextStep, setFormValues, value }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: value,
  });

  const handleClickClear = () => {
    reset();
  };

  const onSubmit = (values) => {
    setFormValues((prev) => ({ ...prev, personalInfo: { ...values } }));
    nextStep();
    console.log("values", values);
  };

  return (
    <form>
      <div className="row">
        <TextField
          name="firstName"
          label="Имя"
          {...register("name")}
          helperText={errors?.name && errors?.name.message}
          error={!!errors?.name}
          fullWidth
        />

        <TextField
          name="lastName"
          label="Фамилия"
          {...register("lastName")}
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
          {...register("email")}
          helperText={errors?.email && errors?.email.message}
          error={!!errors?.email}
          fullWidth
        />

        <TextField
          name="password"
          type="password"
          label="Пароль"
          {...register("password")}
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
          onClick={handleClickClear}
          variant="contained"
          color="secondary"
        >
          Очистить
        </Button>

        <Button
          onClick={handleSubmit(onSubmit)}
          variant="outlined"
          color="primary"
        >
          Далее
        </Button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
