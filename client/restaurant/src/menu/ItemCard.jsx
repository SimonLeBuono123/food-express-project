import React, { useContext, useState } from "react";
import NewItemForm from "./NewItemForm";
import globalContext from "../globalContext.jsx";

export default function ({ title, items, setItems }) {
  const [isAdding, setIsAdding] = useState(false);
  const { deleteItem } = useContext(globalContext);

  const handleClick = (event) => {
    event.preventDefault();
    deleteItem(event.target.id);
    let updatedItems = [...items];
    updatedItems = updatedItems.filter((item) => item._id !== event.target.id);
    setItems(updatedItems);
  };

  let category_id;

  const listItems = items.map((item) => {
    category_id = item.categories._id;

    return (
      <li
        key={item._id ? item._id : Math.random() * 999}
        className="flex items-center justify-between my-1 bg-white rounded-lg shadow-sm px-6 py-4"
      >
        <div className={"border p-6 rounded-lg shadow-md mb-3 bg-white w-full"}>
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
            <button
              className="text-sm font-medium text-red-600 py-1 px-1 rounded-lg"
              id={item._id}
              onClick={handleClick}
            >
              DELETE
            </button>
          </div>
          <p className="text-gray-500 text-sm">{item.ingredients}</p>
          <p className="text-gray-900 font-medium">{item.price} SEK</p>
        </div>
      </li>
    );
  });

  return (
    <div className="flex flex-col w-[20rem] md:m-4">
      <h2 className="font-bold text-white bg-blue-500 p-1 flex justify-between cursor-pointer rounded">
        {title}{" "}
        {!isAdding ? (
          <button
            onClick={() => {
              setIsAdding(true);
            }}
          >
            add item
          </button>
        ) : (
          <button
            onClick={() => {
              setIsAdding(false);
            }}
          >
            close
          </button>
        )}
      </h2>
      {isAdding ? (
        <NewItemForm
          category_id={category_id}
          items={items}
          setItems={setItems}
        />
      ) : null}
      <ul>{listItems}</ul>
    </div>
  );
}
