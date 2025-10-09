import styles from "./Item.module.css";

function Item({ foodItem }: any) {
  return (
    <li key={foodItem} className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
}

export default Item;
