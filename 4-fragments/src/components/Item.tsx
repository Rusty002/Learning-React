import styles from "./Item.module.css";

function Item({ foodItem, handleBuyButton }: any) {
  // const handleBuyButtonClicked = (event: any) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought.`);
  // };

  return (
    <li key={foodItem} className={`${styles["kg-item"]} list-group-item`}>
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
