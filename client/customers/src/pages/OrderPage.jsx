import React, { useContext, useEffect, useState } from 'react';
import globalContext from "../globalContext.jsx";
import OrderCard from '../components/orderpage/orderCard.jsx';
import PreviewCard from "../components/orderpage/PreviewCard.jsx";


function OrderPage() {
    const { orderArray,order, auth, postOrder } = useContext(globalContext)
    const viewOrders = order.filter((item) =>  item?.customers?.email === auth?.email)
    function getRandomKey() {
        return Math.floor(Math.random() * 100000);
    }

    console.log(orderArray.map(item => item.name))
    console.log(order)
    return (<>
            <div className="flex flex-row justify-center item-center gap-2">
                <div className="flex flex-wrap flex-col gap-4 p-10 justify-center bg-sky-500">
                    <h2 className="mt-3 h-10 text-2xl text-center">Your Orders</h2>
                    {orderArray.length > 0 ? orderArray.map((item) => { return <PreviewCard key={getRandomKey()} details={item} /> }) : null}
                </div>
            </div>
            <button className='flex text-center justify-center align-center bg-sky-500 mt-3' onClick={() => { postOrder(orderArray) }}>Make order</button>

            <div className="flex flex-row justify-center item-center gap-2">
                <div className="flex flex-wrap flex-col gap-4 p-10 justify-center bg-sky-500">
                    <h2 className="mt-3 h-10 text-2xl text-center">You have ordered</h2>
                    {viewOrders.map((item)=> { return <OrderCard key={item['_id']} details={item}/>})}
                </div>
            </div>
        </>
    )

}

export default OrderPage;