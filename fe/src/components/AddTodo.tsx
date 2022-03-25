import React from "react";
import "./AddTodo.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const AddTodo: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div className="input">
      <form
        onSubmit={(e) => {
          handleAdd(e);
        }}
      >
        <input
          type="input"
          placeholder="Enter your task."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
