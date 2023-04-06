import React, { useContext } from 'react';
import globalContext from "../../globalContext.jsx";


function MenuCard({ details, handleClick }) {
    const { setOrderArray, orderArray, items } = useContext(globalContext)
    const { _id, name, ingredients, categories, price } = details

    function handleClick(e) {
        const filteredItem = items.filter((item) => item?._id === e.target.value)
        setOrderArray(orderArray => [...orderArray, filteredItem[0]])
        return orderArray
    }

    return (
        <div className="h-50 w-80 bg-slate-100 rounded-2xl ">
            <h3 className="text-center font-semibold text-lg  bg-amber-200 rounded-t-xl " >{name}</h3>
            <p className='group' >Ingredients: <p className='relative hidden group-focus-visible:'>{ingredients}</p></p>
            <p className="relative bottom-12 left-64 italic">{categories.name}</p>
            <p className="text-end">{price}</p>
            <button className="button" value={_id} onClick={handleClick}>Add Item</button>
        </div>
    );
}

export default MenuCard;













