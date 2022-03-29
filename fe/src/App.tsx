import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import {RootState} from "./app/store";
import { addTodo } from "./features/todoSlice";
import {useDispatch,useSelector } from "react-redux";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const todoList=useSelector((state:RootState)=>state);
  const dispatch=useDispatch();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todoContainer">
        {todoList.todo.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}

        </div>
        <AddTodo todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      </div>
    </div>
  );
};

export default App;
