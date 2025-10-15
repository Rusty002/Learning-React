import { useState } from "react";
import Item from "./Item";

export type FoodItemsProps = {
  items: string[];
};

const FoodItems = ({ items }: FoodItemsProps) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item: any, event: any) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event: any) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
