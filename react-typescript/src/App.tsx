import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    // setTodos((prevTodos) => {
    //   return prevTodos.concat(newTodo);
    // });
    setTodos((items) => [...items, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    // setTodos((prevTodos) => {
    //   return prevTodos.filter((todo) => todo.id !== todoId);
    // });

    setTodos((items) => items.filter((item) => item.id != todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} onRemoveTodo={removeTodoHandler}></Todos>
    </div>
  );
}

export default App;
