import React from "react";
import { TodoSchema } from "../model";
import "./TodoItem.css";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { setStatus } from "../features/todoSlice";

interface Props {
  todo: TodoSchema;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDone = (id: number) => {
    dispatch(setStatus({isCompleted:!todo.isCompleted,id:todo.id}));
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
