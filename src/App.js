import "./App.css";
import InputBar from "./components/InputBar.js";
import ItemList from "./components/ItemList.js";
import { useState } from "react";
let nextId = 0;
export default function App() {
  const [toDoItems, setToDoItems] = useState([]);

  // const toDoItems = [
  //   {
  //     id: 1,
  //     todo: "workout", //string
  //     isDone: false, //boolean
  //   },
  //   {
  //     id: 2,
  //     todo: "get massage",
  //     isDone: true,
  //   },
  //   {
  //     id: 3,
  //     todo: "homework",
  //     isDone: false,
  //   },
  // ];
  //console.log(toDoItems);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.toDoInput.value);
    const newToDoItem = e.target.toDoInput.value;
    const newToDoItems = [
      ...toDoItems,
      {
        id: nextId++,
        todo: newToDoItem,
        isDone: false,
      },
    ];
    setToDoItems(newToDoItems);
    e.target.reset();
  }

  function handleItemClick(clickedItemId) {
    console.log(clickedItemId);
    const editedToDoItems = toDoItems.map((item) => {
      if (clickedItemId === item.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setToDoItems(editedToDoItems);
  }

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <InputBar onSubmit={handleSubmit} />
      <ItemList items={toDoItems} onItemClick={handleItemClick} />
    </div>
  );
}

/* 2 Components: 
1. InputBar: receives all ToDo items.
2. ItemList: displays all inserted ToDos.
*/
