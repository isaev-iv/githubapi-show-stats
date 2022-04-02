import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      const data = await fetch(
        "https://62487b0a20197bb46269d271.mockapi.io/userss"
      );
      const result = await data.json();
      setUsers(result);
    } catch (e) {
      console.error(e);
    }
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
