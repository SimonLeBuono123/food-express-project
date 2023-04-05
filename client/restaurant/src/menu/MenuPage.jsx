import { useState, useContext, useEffect } from "react";
import globalContext from "../globalContext.jsx";
import ItemCard from "./ItemCard.jsx";

export default function () {
  const { items } = useContext(globalContext);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setAllItems(items);
  }, [...items]);

console.log(allItems)
    const mains = items.filter(item => item.categories.name === "Main")
    const sides = items.filter(item => item.categories.name === "Side")
    const drinks = items.filter(item => item.categories.name === "Drink")

  return (
    <section className={"h-screen w-screen flex justify-center m-5"}>
        <div className='flex flex-col'>
      <h2>Main</h2>
        < ItemCard types={mains}/>
        </div>
        <div className='flex flex-col'>
        <h2>Condiments</h2>
        < ItemCard types={sides}/>
        </div>
        <div className='flex flex-col'>
        <h2>Drinks</h2>
        <ItemCard types={drinks}/>
        </div>
    </section>
  );
}
