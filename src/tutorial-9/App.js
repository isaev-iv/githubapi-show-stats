import React from "react";
import axios from "axios";
import { InputForm } from "./component/InputForm";
import { UserForm } from "./component/UserForm";
import { UserNotFound } from "./component/UserNotFound";

function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [data, setData] = React.useState(null);
  const [loadingUser, setLoadingUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  // !!!не смог реализовать функцию Debounce
  // !!!Функция сохранения query параметров отправляет из инпута в url, затем из url в инпут отправляет, но не рендерит заново
  // React.useEffect(() => {
  //   debounce(fetchData, 5000)();
  //   console.log("change is done");
  // }, [inputValue]);

  // const debounce = (fn, delay) => {
  //   let timer;
  //   return function () {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn(inputValue);
  //     }, delay);
  //   };
  // };

  React.useEffect(() => {
    let params = new URL(document.location).searchParams;
    let login = params.get("login");
    setInputValue(login);
    fetchData();
  }, []);

  const setQueryParams = () => {
    window.history.pushState(
      { login: inputValue },
      "",
      `/?login=${inputValue}`
    );
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );
      setData(data);
      setLoadingUser(false);
      setIsLoading(false);
    } catch (err) {
      setLoadingUser(true);
      setIsLoading(false);
    }
  };

  if (isLoading) return <h3>Отправка данных на сервер...</h3>;

  return (
    <div className="app">
      <div className="app-container">
        <InputForm
          setQueryParams={setQueryParams}
          isLoading={isLoading}
          inputValue={inputValue}
          setInputValue={setInputValue}
          fetchData={fetchData}
        />
        {loadingUser ? <UserNotFound /> : data && <UserForm data={data} />}
      </div>
    </div>
  );
}
export default App;
