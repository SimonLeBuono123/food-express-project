import React, {useContext, useEffect, useState} from 'react';
import globalContext from "../globalContext.jsx";
import MenuCard from "../components/menupage/MenuCard.jsx";

function OrderPage() {
    const { items, orderArray, postOrder } = useContext(globalContext)

    function getRandomKey() {
        return Math.floor(Math.random() * 100000);
    }


    return (<>
            <h1 className="w-full">ORDERS</h1>
            <div className="flex flex-col justify-center item-center bg-sky-500 gap-2">
                <h2 className="text-center">Main's</h2>
                <div className="w-full flex flexbox gap-2 pr-3 rounded-xl shadow-lg justify-center item-center">
                    {orderArray.length > 0 ? orderArray.map( (item) => {return <MenuCard key={getRandomKey()} details={item} />}) : null}
                </div>
                <button onClick={() => {postOrder(orderArray)}}>Make order</button>
            </div>
        </>
    )

}

export default OrderPage;