import { useRef } from "react";

interface NewTodoPros {
  onAddTodo: Function;
}

const NewTodo: React.FC<NewTodoPros> = ({ onAddTodo }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function isValidDate(year: any, month: any, day: any) {
    var d = new Date(year, month, day);
    if (
      d.getFullYear() === year &&
      d.getMonth() === month &&
      d.getDate() === day
    ) {
      return false;
    }
    console.log("bad date");
    return true;
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    let dateObj = new Date(enteredText);
    console.log(dateObj);

    let month = Number(enteredText.slice(0, 2));
    let day = Number(enteredText.slice(3, 5));
    let year = Number(enteredText.slice(6, 10));

    console.log("Month: " + month);
    console.log("Day: " + day);
    console.log("Year: " + year);

    console.log(dateObj.getFullYear());
    console.log(dateObj.getMonth());
    console.log(dateObj.getDate());

    if (
      dateObj.getFullYear() !== year ||
      dateObj.getMonth() !== month - 1 ||
      dateObj.getDate() !== day
    ) {
      console.log("bad date");
      return true;
    }

    //isValidDate(year, month, day);

    if (isNaN(dateObj.getTime())) {
      console.log("invalidate");
      return;
    }

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
