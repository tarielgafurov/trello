import "./App.css";
import Form from "./Components/Form";
import { useSelector } from "react-redux";
import GlobalWindow from "./Components/Globalwindow";
import TodoItem from "./Components/TodoItem";

function App() {
  const todos = useSelector((state) => state.userTrello.todos);
  const isSecond = useSelector((state) => state.user.isSecond);
  const setGlobalWindow = useSelector((state) => state.user.GlobalWindow);

  return (
    <div className="App">
      {isSecond && <Form />}

      {setGlobalWindow && <GlobalWindow />}

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
