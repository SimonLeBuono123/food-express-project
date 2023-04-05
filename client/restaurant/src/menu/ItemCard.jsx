import React, { useState } from "react";
import NewItemForm from "./NewItemForm";

export default function ({ title, types, items, setAllItems }) {
  const [isAdding, setIsAdding] = useState(false);

    let category

  const listItems = types.map((type) => {
      category = type.categories._id
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
      {isAdding ? <NewItemForm category={category} setAllItems={setAllItems}/> : null}
      <ul>{listItems}</ul>
    </div>
  );
}
