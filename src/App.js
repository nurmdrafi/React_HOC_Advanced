import "./styles.css";
import SearchUsers from "../src/components/UsersList";
import SearchTodos from "../src/components/TodoList";

export default function App() {
  return (
    <div className="App">
      <SearchUsers />
      <SearchTodos />
    </div>
  );
}
