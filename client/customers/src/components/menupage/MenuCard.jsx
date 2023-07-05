import React, { useContext, useState } from 'react';
import globalContext from "../../globalContext.jsx";


function MenuCard({ details }) {
    const { setOrderArray, orderArray, items } = useContext(globalContext)
    const { _id, name, ingredients, categories, price } = details
    const [count, setCount] = useState(0)

    function handleAddClick(e) {
        setCount(count + 1)
        const filteredItem = items.filter((item) => item?._id === e.target.value)
        setOrderArray(orderArray => [...orderArray, filteredItem[0]])
        return orderArray
    }
    function removeArray(e) {
        setCount(count - 1)
        const filteredItem = items.filter((item) => item?._id === e.target.value)
        const index = orderArray.findIndex(({ _id }) => _id === filteredItem[0]._id);
        if (index !== -1) {
            setOrderArray([
                ...orderArray.slice(0, index),
                ...orderArray.slice(index + 1)
            ]);
        }
        return orderArray
    }


    return (<>
        <div className='menuNameAndPrice'>
            <h3>{name}</h3>
            <p className='menuPrice'>{price}.-</p>
        </div>
        <p className='menuIngredients'>{ingredients}</p>

        <div className='menuOrderAndButtons'>
            <p>Order: {count}</p>
            <button className="icon addIcon" value={_id} onClick={handleAddClick}></button>
            {orderArray.some(item => item._id === _id) ? <button className="icon removeIcon" value={_id} onClick={removeArray}></button> : null}
        </div>
    </>
    );
}

export default MenuCard;













