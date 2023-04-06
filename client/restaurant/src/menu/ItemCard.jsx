import React, { useContext, useState } from "react";
import NewItemForm from "./NewItemForm";
import globalContext from "../globalContext.jsx";

export default function ({ title, types, setTypes }) {
  const [isAdding, setIsAdding] = useState(false);
  const { deleteItem } = useContext(globalContext);

  const handleClick = (event) => {
    event.preventDefault();
    deleteItem(event.target.id);
    let updatedItems = [...types];
    updatedItems = updatedItems.filter((item) => item._id !== event.target.id);
    setTypes(updatedItems);
  };

  let category;

  const listItems = types.map((type) => {
    category = type.categories._id;
    return (
      <li
        key={type._id ? type._id : Math.random() * 999}
        className="flex items-center justify-between m-5"
      >
        <div>
          <div className="flex">
            <h2 className="font-bold">{type.name}</h2>
            <button
              className="text-red-500 cursor-pointer"
              id={type._id}
              onClick={handleClick}
            >
              DELETE
            </button>
          </div>
          <p>{type.ingredients}</p>
          <p>{type.price} SEK</p>
        </div>
      </li>
    );
  });

  return (
    <div className="flex flex-col w-[20rem] md:m-4">
      <h2 className="font-bold text-white bg-blue-500 p-1 flex justify-between cursor-pointer">
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
        <NewItemForm category={category} types={types} setTypes={setTypes} />
      ) : null}
      <ul>{listItems}</ul>
    </div>
  );
}
