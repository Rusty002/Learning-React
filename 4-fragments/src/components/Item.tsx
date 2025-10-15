import styles from "./Item.module.css";

function Item({ foodItem, bought, handleBuyButton }: any) {
  return (
    <li
      key={foodItem}
      className={`${styles["kg-item"]} list-group-item ${
        bought ? "active" : ""
      }`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
