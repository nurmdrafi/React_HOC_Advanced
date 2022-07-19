import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      console.log(users);
    };
    fetchUser();
  }, []);

  let renderUsers = users.map((user) => <h2>{user.name}</h2>);

  let filterUsers = users
    .filter(({ name }) => {
      return name.toLowerCase().indexOf(term) >= 0;
    })
    .map((user) => <h2 key={user.id}>{user.name}</h2>);
  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {filterUsers}
    </div>
  );
};
export default UsersList;
