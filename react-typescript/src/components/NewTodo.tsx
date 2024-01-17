import { useRef } from "react";

interface NewTodoPros {
  onAddTodo: Function;
}

const NewTodo: React.FC<NewTodoPros> = ({ onAddTodo }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />

      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
