import ProfileFunctional from "./components/profileFunctional.jsx";
import ProfileClass from "./components/profileClass.jsx";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <ProfileFunctional
        name="Вася Пупкин"
        registredAt={new Date(2021, 5, 22)}
      />
      <div className="separation">
        -----------------------------------------
      </div>
      <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
};

export default App;
