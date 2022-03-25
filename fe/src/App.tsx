import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          <TodoItem/>
        </div>
        <AddTodo/>
      </div>
    </div>
  );
};

export default App;
