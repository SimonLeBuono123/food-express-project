import React from 'react';


export default function({types}) {

console.log(types)

    const listItems = types.map((type)=>{
        return (
            <li key={type._id} className='flex items-center justify-between m-5'>
                <div>
                    <h2>{type.name}</h2>
                </div>
            </li>
        )
    })
console.log(listItems)
    return <>
        <h3>
            {types.categories}
        </h3>
        <ul>
            {listItems}
        </ul>
    </>
       /*
        <div className="bg-white w-64 h-32 flex flexbox flex-col rounded-xl shadow-lg pr-3 justify-center item-center">

            <h3 className="text-center underline">{name}</h3>
            <p>Ingredients: {ingredients}</p>
            <p className="text-end">{categories.name}</p>
            <p className="text-end">{price}</p>
        </div>
        */


}