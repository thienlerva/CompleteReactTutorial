import React, { forwardRef } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

interface TodosPros {
  onRemoveTodo: Function;
  todos: Todo[];
}

const Todos = forwardRef<HTMLDivElement, TodosPros>(
  ({ todos, onRemoveTodo }, ref) => {
    return (
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    );
  }
);

export default Todos;
