import { useState, useContext } from "react";
import globalContext from "../globalContext";

export default function ({ category, types, setTypes }) {
  const { items } = useContext(globalContext);
  const [name, setName] = useState();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();
  const { postItem } = useContext(globalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    postItem(name, ingredients, category, parseFloat(price));
    let newItem = {
      name: name,
      ingredients: ingredients,
      categories: { _id: category },
      price: price,
    };
    let newItems = [...types, newItem];
    setTypes(newItems);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mt-1 flex rounded-md shadow-sm flex flex-col">
        <input
          type="text"
          name="item"
          id="item"
          onChange={(event) => setName(event.target.value)}
          className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
          placeholder="Enter name"
        />
        <input
          type="text"
          name="item"
          id="item"
          onChange={(event) => setIngredients(event.target.value)}
          className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
          placeholder="Enter ingredients"
        />
        <input
          type="number"
          name="item"
          id="item"
          onChange={(event) => setPrice(event.target.value)}
          className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
          placeholder="Enter price"
        />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
    </form>
  );
}
