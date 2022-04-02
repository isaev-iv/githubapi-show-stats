import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import AddressForm from "./components/AddressForm.jsx";
import PersonalInfoForm from "./components/PersonalInfoForm.jsx";
import { DEFAULT_VALUE } from "./components/consts";

import "./index.scss";

function App() {
  const [formValues, setFormValues] = React.useState(DEFAULT_VALUE);
  const navigate = useNavigate();

  const nextStep = () => {
    navigate("/address", { replace: true });
  };
  const prevStep = () => {
    navigate("/", { replace: true });
  };

  console.log("Main form", formValues.personalInfo);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PersonalInfoForm
              nextStep={nextStep}
              setFormValues={setFormValues}
              value={formValues.personalInfo}
            />
          }
        />
        <Route
          path="/address"
          element={
            <AddressForm prevStep={prevStep} setFormValues={setFormValues} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
