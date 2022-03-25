import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {TodoSchema } from "./model";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos,setTodos]=useState<TodoSchema[]>([]);
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isCompleted:false}])
      setTodo("")
    }
  };
  console.log(todos)
  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todoContainer">
          <TodoList todos={todos} setTodos={setTodos}/>
        </div>
        <AddTodo todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      </div>
    </div>
  );
};

export default App;
