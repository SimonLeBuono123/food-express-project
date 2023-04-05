import React, {useContext} from 'react';
import globalContext from "../../globalContext.jsx";


function MenuCard({details}) {
    const {setOrderArray, orderArray} = useContext(globalContext)
    const {_id, name, ingredients, categories, price} = details
    let tempArr = []


    function addItem(array, value) {
        array.push(value)
    }
    function handleClick(e) {
        setOrderArray(orderArray => [...orderArray, e.target.value])
    }

    return (
        <div className="bg-white w-64 h-32 flex flexbox flex-col rounded-xl shadow-lg pr-3 justify-center item-center">

            <h3 className="text-center underline" >{name}</h3>
            <p>Ingredients: {ingredients}</p>
            <p className="text-end">{categories.name}</p>
            <p className="text-end">{price}</p>
            <button value={_id}  onClick={handleClick}>Place Order</button>
        </div>
    );
}

export default MenuCard;













