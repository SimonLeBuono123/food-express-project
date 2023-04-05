import { useState, useContext, useEffect } from "react";
import globalContext from "../globalContext.jsx";
import ItemCard from "./ItemCard.jsx";

export default function () {
  const { items } = useContext(globalContext);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setAllItems(items);
  }, [items]);

  console.log(allItems);
  const mains = items.filter((item) => item.categories.name === "Main");
  const sides = items.filter((item) => item.categories.name === "Side");
  const drinks = items.filter((item) => item.categories.name === "Drink");

  return (
    <section className={"h-screen w-screen flex flex-col m-5"}>
      <ItemCard title={"Main"} types={mains} allItems={allItems} setAllItems={setAllItems} />
      <ItemCard title={"Sides"} types={sides} allItems={allItems} setAllItems={setAllItems}/>
      <ItemCard title={"Drinks"} types={drinks} allItems={allItems} setAllItems={setAllItems}/>
    </section>
  );
}
