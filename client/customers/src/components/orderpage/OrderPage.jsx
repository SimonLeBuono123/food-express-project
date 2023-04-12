import React, { useContext } from 'react';
import globalContext from "../../globalContext.jsx";
import PreviewCard from "./PreviewCard.jsx";
import { Link } from 'react-router-dom';
import OrderCardYellow from './OrderCardYellow.jsx';
import OrderCardBlue from './OrderCardBlue.jsx';
import OrderCardRed from './OrderCardRed.jsx';
import getRandomKey from '../utility/getRandomKey.js';
import GateKeeper from '../utility/gateKeeper.jsx';


function OrderPage() {
    const { setOrderArray, orderArray, order, auth, postOrder } = useContext(globalContext)
    const viewOrders = order.filter((item) => item?.customers?.email === auth?.email)

    function checkPending(arr) {
        return arr.isAccepted === false && arr.isDelivered === false
    }

    function checkAccepted(arr) {
        return arr.isAccepted === true
    }

    function checkDelivered(arr) {
        return arr.isDelivered === true
    }
    function handleClick() {
        if(orderArray>0){
        postOrder(orderArray)}
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

        <div className="flex flex-col items-center gap-2">
            {viewOrders.length > 0 ? <h2 className="menuHeader">Your current orders:</h2> : null}
        </div>
        
        <div className="flex flex-row flex-wrap justify-center gap-2">
            <div className='menu pt-6'>
            <h1 className='header'>On hold</h1>
                {viewOrders.filter(checkPending).map((item) => { return <OrderCardYellow key={item['_id']} details={item} /> })}
            </div>
            <div className='menu pt-6'>
            <h1 className='header'>Pending</h1>
                {viewOrders.filter(checkAccepted).map((item) => { return <OrderCardBlue key={item['_id']} details={item} /> })}
            </div>
            <div className='menu pt-6'>
            <h1 className='header'>Completed</h1>
                {viewOrders.filter(checkDelivered).map((item) => { return <OrderCardRed key={item['_id']} details={item} /> })}
            </div>
        </div>
    </>
    )
}

export default OrderPage;