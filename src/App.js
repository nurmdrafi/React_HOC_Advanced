import "./styles.css";
import TodoList from "./TodoList";
import UsersList from "./UsersList";

export default function App() {
  return (
    <div className="App">
      <UsersList />
      <TodoList />
    </div>
  );
}
