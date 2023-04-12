import React, { useContext, useState } from 'react';
import globalContext from "../../globalContext.jsx";


function MenuCard({ details, handleClick }) {
    const { setOrderArray, orderArray, items } = useContext(globalContext)
    const { _id, name, ingredients, categories, price } = details
    const [count, setCount] = useState(0)

    function handleAddClick(e) {
        setCount(count+1)
        const filteredItem = items.filter((item) => item?._id === e.target.value)
        setOrderArray(orderArray => [...orderArray, filteredItem[0]])
        return orderArray
    }


    return (<>
        <div className="h-10 w-80 flex justify-center bg-slate-100 rounded-t-2xl p-0 m-0">
            <h3 className='text-2xl self-center'>{name}</h3>

        </div>
        <div className="w-80 h-20 bg-[url('/../../assets/no-image.png')] bg-contain bg-no-repeat bg-center">
        </div>
        <div className="h-10 w-80 bg-slate-100 rounded-b-2xl">
            <div className='flex justify-between mt-1'>
                <div className='group ml-3'>Ingredients
                    <p className='invisible group-hover:visible z-10 bg-black text-slate-100 rounded'>{ingredients}</p>
                </div>
                <p className='italic mr-3'>I want: {count}</p>
            </div>
        </div>
        <button className="button mb-10 z-1" value={_id} onClick={handleAddClick}>{price} kr/st</button>
    </>
    );
}

export default MenuCard;













