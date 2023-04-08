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

    return (<>
        <div className="h-10 w-80 bg-slate-100 rounded-t-2xl p-0 m-0">
            <h3 className='text-2xl text-center'>{name}</h3>
        </div>
        <div className="w-80 h-20 bg-[url('/../../assets/no-image.png')] bg-contain bg-no-repeat bg-center">
        </div>
        <div className="h-10 w-80 bg-slate-100 rounded-b-2xl">
            <div className='flex justify-between mt-1'>
                <div className='group ml-3'>Ingredients
                    <p className='invisible group-hover:visible bg-black text-slate-100 rounded'>{ingredients}</p>
                </div>
                <p className='italic mr-3'>{categories.name}</p>
            </div>
        </div>
        <button className="button z-0" value={_id} onClick={handleClick}>{price} kr/st</button>
    </>
    );
}

export default MenuCard;













