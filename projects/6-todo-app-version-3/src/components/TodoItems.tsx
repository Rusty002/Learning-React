import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';

function TodoItems({ todoItems }: any) {
  return (
      <div className={styles.itemsContainer}>
        {todoItems.map((item: any) => (
          <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
        ))}
      </div>
  );
}

export default TodoItems;
