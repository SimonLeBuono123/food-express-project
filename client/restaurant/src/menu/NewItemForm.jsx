import { useState, useContext } from "react";
import globalContext from "../globalContext";

export default function ({ category_id, items, setItems }) {
  const { categories } = useContext(globalContext);
  const [name, setName] = useState();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();
  const [newCategory_id, setNewCategory_id] = useState(null);
  const { postItem } = useContext(globalContext);

  function getCategoryId(categoryName) {
    let categoryObject = categories.find((category) => {
      if (category.name === categoryName) {
        return category;
      }
    });
    return categoryObject._id.toString();
  }

  const handleSubmit = (event) => {
    let newItem;
    event.preventDefault();
    if (category_id === undefined) {
      category_id = newCategory_id;
    }
    postItem(name, ingredients, category_id, parseFloat(price));
    newItem = {
      name: name,
      ingredients: ingredients,
      categories: { _id: category_id },
      price: price,
    };

    let newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mt-1 rounded-md shadow-sm flex flex-col">
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
        {!category_id ? (
          <select
            name="item"
            id="item"
            onChange={(event) => setNewCategory_id(event.target.value)}
          >
            <option className="font-bold" value={"Select a valid category"}>
              Select a category
            </option>
            <option value={getCategoryId("Main")}>Main</option>
            <option value={getCategoryId("Side")}>Side</option>
            <option value={getCategoryId("Drink")}>Drink</option>
          </select>
        ) : null}
        <button
          type="submit"
          className={`inline-flex items-center px-4 py-2 border border-transparent 
          text-sm font-medium rounded text-white bg-blue-500 hover:bg-blue-600 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            category_id === undefined && newCategory_id === null
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={category_id === undefined && newCategory_id === null}
        >
          Add
        </button>
      </div>
    </form>
  );
}
