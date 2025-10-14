import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }: any) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
