import styles from "./Display.module.css";

function Display({ displayValue }: any) {
  return (
    <input
      className={styles.display}
      id="display"
      type="text"
      value={displayValue}
      readOnly
    />
  );
}

export default Display;
