import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);

  async function getUsers(e) {
    // e.preventDefault();

    const response = await fetch(
      "https://62487b0a20197bb46269d271.mockapi.io/user"
    );
    if (!response.ok) {
      const messageError = `Произошла ошибка: ${response.status}`;
      throw Error(messageError);
    }
    const result = await response.json();
    setUsers(result);
  }

  return (
    <div>
      <button onClick={getUsers}>Получить список пользователей</button>
      <ul>
        {users.length &&
          users.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default App;
