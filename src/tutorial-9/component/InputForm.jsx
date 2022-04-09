import React from "react";

export const InputForm = ({
  inputValue,
  setInputValue,
  fetchData,
  isLoading,
  setQueryParams,
}) => {
  const onClick = (e) => {
    e.preventDefault();
    setQueryParams();
    fetchData();
  };

  return (
    <form className="app-form">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        className="app-form_input"
        placeholder="Укажите GitHub-аккаунт"
        value={inputValue}
      />
      <button
        disabled={isLoading}
        onClick={onClick}
        className="app-form_button"
      >
        Найти
      </button>
    </form>
  );
};
