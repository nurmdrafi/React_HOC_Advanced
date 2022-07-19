import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
      console.log(todos);
    };
    fetchTodos();
  }, []);

  // let renderUsers = users.map((user) => <h2>{user.name}</h2>);

  let filterTodos = todos
    .slice(0, 10)
    .filter(({ title }) => {
      return title.toLowerCase().indexOf(term) >= 0;
    })
    .map((todo) => <h2 key={todo.id}>{todo.title}</h2>);
  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {filterTodos}
    </div>
  );
};
export default TodoList;
