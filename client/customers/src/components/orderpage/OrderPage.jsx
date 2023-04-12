import React, { useContext } from 'react';
import globalContext from "../../globalContext.jsx";
import PreviewCard from "./PreviewCard.jsx";
import { Link } from 'react-router-dom';
import getRandomKey from '../utility/getRandomKey.js';
import GateKeeper from '../utility/gateKeeper.jsx';
import PendingOrder from './PendingOrder.jsx';
import AcceptedOrder from './AcceptedOrder.jsx';
import DeliveredOrder from './DeliveredOrder.jsx';


function OrderPage() {
    const { setOrderArray, orderArray, order, auth, postOrder } = useContext(globalContext)
    const viewOrders = order.filter((item) => item?.customers?.email === auth?.email)

    
    function handleClick() {
        if (orderArray.length > 0) {
            postOrder(orderArray)
        }
        setOrderArray([])
    }

    return (<>
        <GateKeeper />
        <Link to={'/menu'}><button className='button' onClick={() => setOrderArray([])}>Go to the menu</button></Link>

        <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="header">You are about to order</h2>
            <div className='bg-slate-300'>
                {orderArray.length > 0 ? orderArray.map((item) => { return <PreviewCard key={getRandomKey()} details={item} /> }) : null}
            </div>
            <button className='button' onClick={handleClick}>Place order</button>
        </div>
        <h2 className="header">Your orders:</h2>
        <div className='flex flex-wrap gap-2 justify-center'>
            <PendingOrder />
            <AcceptedOrder />
            <DeliveredOrder />
        </div>
    </>
    )
}

export default OrderPage;