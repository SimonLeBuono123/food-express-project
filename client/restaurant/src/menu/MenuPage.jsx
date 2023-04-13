import { useState, useContext, useEffect } from "react";
import globalContext from "../globalContext.jsx";
import ItemCard from "./ItemCard.jsx";

export default function () {
  const { items } = useContext(globalContext);
  const [allItems, setAllItems] = useState([]);
  const [mains, setMains] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    setAllItems(items);
    setMains(items.filter((item) => item.categories.name === "Main"));
    setSides(items.filter((item) => item.categories.name === "Side"));
    setDrinks(items.filter((item) => item.categories.name === "Drink"));
  }, [items]);

  return (
    <section className={"h-screen w-screen flex flex-col m-5 md:flex-row"}>
      <ItemCard title={"Main"} items={mains} setItems={setMains} />
      <ItemCard title={"Sides"} items={sides} setItems={setSides} />
      <ItemCard title={"Drinks"} items={drinks} setItems={setDrinks} />
    </section>
  );
}
