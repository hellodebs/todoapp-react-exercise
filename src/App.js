import "./App.css";
import InputBar from "./components/InputBar.js";
import ItemList from "./components/ItemList.js";
// import { useState } from "react";

export default function App() {
  // const [inputs, setInputItem] = useState([]);

  const toDoItems = [
    {
      todo: "workout", //string
      isDone: false, //boolean
    },
    {
      todo: "get massage",
      isDone: true,
    },
    {
      todo: "homework",
      isDone: false,
    },
  ];
  console.log(toDoItems);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("I got submitted.");
  }

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <InputBar onSubmit={handleSubmit} />
      <ItemList items={toDoItems} />
    </div>
  );
}

/* 2 Components: 
1. InputBar: receives all ToDo items.
2. ItemList: displays all inserted ToDos.
*/
