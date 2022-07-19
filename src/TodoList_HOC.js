import HOC from "./HOC";

const TodoList = ({ data }) => {
  let renderTodos = data.map((todo) => {
    return <h2 key={todo.userId}>{todo.title}</h2>;
  });
  return <div>{renderTodos}</div>;
};
const SearchTodos = HOC(TodoList, "Todos");
export default SearchTodos;
