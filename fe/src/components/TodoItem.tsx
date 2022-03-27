import React from "react";
import { TodoSchema } from "../model";
import "./TodoItem.css";
import { MdDone } from "react-icons/md";

interface Props {
  todo: TodoSchema;
  todos: TodoSchema[];
  setTodos: React.Dispatch<React.SetStateAction<TodoSchema[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  return (
    <form className="todoItem">
      <div>
        <span className="icon_done" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
      {todo.isCompleted ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
    </form>
  );
};

export default TodoItem;
