import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [maskedValue, setMaskedValue] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

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

    setTodos((items) => items.filter((item) => item.id !== todoId));
  };

  const handleOnInputChange = (e: any) => {
    e.preventDefault();
    let value = e.target.value;

    setMaskedValue(value);

    if (value.length > 9) {
      console.log("begin validate");
      let dateObj = new Date(value);
      console.log(dateObj);

      let month = Number(value.slice(0, 2));
      let day = Number(value.slice(3, 5));
      let year = Number(value.slice(6, 10));

      if (
        dateObj.getFullYear() !== year ||
        dateObj.getMonth() !== month - 1 ||
        dateObj.getDate() !== day
      ) {
        console.log("bad date");
        setError(true);
        setMessage("Invalid date");
        return true;
      }

      //isValidDate(year, month, day);

      if (isNaN(dateObj.getTime())) {
        console.log("invalidate");
        setError(true);
        setMessage("Invalid date");
        return;
      }
    }
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} onRemoveTodo={removeTodoHandler}></Todos>
      {error ? message : ""}
      <input value={maskedValue} onInput={(e) => handleOnInputChange(e)} />
    </div>
  );
}

export default App;
