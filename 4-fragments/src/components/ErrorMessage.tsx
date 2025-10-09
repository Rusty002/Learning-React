import type { FoodItemsProps } from "./FoodItems";

const ErrorMessage = ({ items }: FoodItemsProps) => {
  let emptyMessage = items.length === 0 ? <h3>I am still Hungry.</h3> : null;
  return <>{emptyMessage}</>;
};

export default ErrorMessage;
