import TodoItem from "./TodoItem";

function TodoItems({ todoItems }: any) {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item: any) => (
          <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
