import Item from "./Item";

export type FoodItemsProps = {
  items: string[];
};

const FoodItems = ({ items }: FoodItemsProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
