import React, { useState } from "react";
import NewItemForm from "./NewItemForm";

export default function ({ title, types }) {
  const [isAdding, setIsAdding] = useState(false);

  /*     const { name, ingredients, categories, price} = details */

  const listItems = types.map((type) => {
    return (
      <li key={type._id} className="flex items-center justify-between m-5">
        <div>
          <h2 className="font-bold">{type.name}</h2>
          <p>{type.ingredients}</p>
          <p>{type.price} SEK</p>
        </div>
      </li>
    );
  });

  return (
    <div className="flex flex-col w-[20rem]">
      <h2 className="font-bold text-white bg-blue-500 p-1 flex justify-between cursor-pointer">
        {title}{" "}
        {!isAdding ? (
          <p
            onClick={() => {
              setIsAdding(true);
            }}
          >
            add item
          </p>
        ) : (
          <p
            onClick={() => {
              setIsAdding(false);
            }}
          >
            close
          </p>
        )}
      </h2>
      {isAdding ? <NewItemForm/> : null}
      <ul>{listItems}</ul>
    </div>
  );
}
