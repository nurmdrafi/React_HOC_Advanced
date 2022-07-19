import "./styles.css";
import SearchTodos from "./TodoList_HOC";
import SearchUsers from "./UsersList_HOC";

export default function App() {
  return (
    <div className="App">
      <SearchUsers />
      <SearchTodos />
    </div>
  );
}
