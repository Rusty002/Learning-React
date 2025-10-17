import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go To College",
      dueDate: "4/10/23",
    },
    {
      name: "Complete Learning React",
      dueDate: "4/10/23",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName: any, itemDueDate: any) => {
    const newtodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newtodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
