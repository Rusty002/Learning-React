import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function TodoItems({ todoItems, onDeleteClick }: any) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item: any) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
