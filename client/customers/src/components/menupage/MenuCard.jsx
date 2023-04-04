import React from 'react';


function MenuCard({details}) {

    const { name, ingredients, categories, price} = details
    return (
        <div className="bg-white w-64 h-32 flex flexbox flex-col rounded-xl shadow-lg pr-3 justify-center item-center">

            <h3 className="text-center underline" >{name}</h3>
            <p>Ingredients: {ingredients}</p>
            <p className="text-end">{categories.name}</p>
            <p className="text-end">{price}</p>
        </div>
    );
}

export default MenuCard;













