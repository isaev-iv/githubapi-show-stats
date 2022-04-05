import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const schema = yup.object().shape({
  city: yup.string().required("Укажите город"),
  street: yup.string().required("Укажите улицу"),
  appartment: yup.string().required("Укажите номер дома"),
});

const AddressForm = ({ setFormValues, prevStep, value }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const handleClickClear = () => {
    reset();
  };

  const onSubmit = (values) => {
    setFormValues((prev) => ({ ...prev, ...values }));
    prevStep();
  };

  return (
    <>
      <div>
        <TextField
          name="city"
          label="Город"
          {...register("city")}
          helperText={errors?.city && errors?.city.message}
          error={!!errors?.city}
          fullWidth
        />
        <TextField
          name="street"
          label="Улица"
          {...register("street")}
          helperText={errors?.street && errors?.street.message}
          error={!!errors?.street}
          fullWidth
        />
        <TextField
          name="appartment"
          label="Номер дома"
          {...register("appartment")}
          helperText={errors?.appartment && errors?.appartment.message}
          error={!!errors?.appartment}
          fullWidth
        />
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
        <div>
          <Button onClick={() => prevStep()} variant="outlined" color="primary">
            Назад
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="outlined"
            color="primary"
          >
            Далее
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
