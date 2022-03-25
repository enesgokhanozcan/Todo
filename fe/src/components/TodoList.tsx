import React from "react";
import { TodoSchema } from "../model";
import TodoItem from "./TodoItem";

interface Props {
  todos: TodoSchema[];
  setTodos: React.Dispatch<React.SetStateAction<TodoSchema[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem 
            todo={todo} 
            key={todo.id} 
            todos={todos} 
            setTodos={setTodos} 
        />
      ))}
    </>
  );
};

export default TodoList;
