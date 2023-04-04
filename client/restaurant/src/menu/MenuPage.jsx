import { useState, useContext, useEffect } from "react";
import globalContext from "../globalContext.jsx";

export default function () {
  const { items } = useContext(globalContext);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setAllItems(items);
  }, [items]);

  console.log(allItems)
  return (
    <section className={"h-screen w-screen flex"}>
      <h2>Main</h2>

      <h2>Condiments</h2>

      <h2>Drinks</h2>
    </section>
  );
}
