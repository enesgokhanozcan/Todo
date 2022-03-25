import React from "react";
import { TodoSchema } from "../model";

interface Props {
    todo: TodoSchema;
    todos: TodoSchema[];
    setTodos: React.Dispatch<React.SetStateAction<TodoSchema[]>>;
  }

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return(
    <p>Hello</p>
  );
};

export default TodoItem;
