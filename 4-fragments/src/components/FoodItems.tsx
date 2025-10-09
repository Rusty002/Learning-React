import Item from "./Item";

export type FoodItemsProps = {
  items: string[];
};

const FoodItems = ({ items }: FoodItemsProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
