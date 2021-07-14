import "./App.css";

export default function App() {
  const toDoListItems = [
    {
      todo: "workout", //string
      isDone: false, //boolean
    },
    {
      todo: "massage",
      isDone: true,
    },
    {
      todo: "homework",
      isDone: false,
    },
  ];
  //console.log(toDoListItems);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="My to-do..." />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

/* 3 Components: 
1. TodoTable: contains the whole app.
2. InputBar: receives all ToDo items.
3. ItemTable: displays all inserted ToDos.
*/
