import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:3000/users?count=${count}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [count]);

  console.log(users);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Users</h1>
      <input
        type="number"
        value={count}
        min={1}
        max={50}
        onChange={(e) => setCount(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
