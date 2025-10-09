import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";

function App() {
  let foodItems = ["Fruits", "Vegetables", "Rice", "Meat", "Egg", "Milk"];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
