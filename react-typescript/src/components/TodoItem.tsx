interface TodoItemPros {
  id: string;
  text: string;
  onRemoveTodo: Function;
}

const TodoItem: React.FC<TodoItemPros> = ({ id, text, onRemoveTodo }) => {
  return <li onClick={() => onRemoveTodo(id)}>{text}</li>;
};

export default TodoItem;
