import React, { useContext } from 'react';
import globalContext from "../../globalContext.jsx";
import PreviewCard from "./PreviewCard.jsx";
import { Link } from 'react-router-dom';
import getRandomKey from '../utility/getRandomKey.js';
import GateKeeper from '../utility/gateKeeper.jsx';
import PendingOrder from './PendingOrder.jsx';
import AcceptedOrder from './AcceptedOrder.jsx';
import DeliveredOrder from './DeliveredOrder.jsx';
import LogOutButton from '../loginpage/LogOutButton.jsx';


function OrderPage() {
    const { setOrderArray, orderArray, order, auth, postOrder } = useContext(globalContext)
  
    function handleClick() {
        if (orderArray.length > 0) {
            postOrder(orderArray)
        }
        setOrderArray([])
    }

    function totalPrice() {
        let sum = 0
        for (let i = 0; i < orderArray.length; i++) {
          sum = sum + orderArray[i].price
        } 
        return sum
    }

    return (<>
        <GateKeeper />
        <header>
            <nav>
            <Link to={'/menu'}><button className='icon homeIcon' onClick={() => setOrderArray([])}/></Link>
                <LogOutButton />
            </nav>
        </header>
        

        <main className="orderMain">
            <section>
            <h1>You are about to order</h1>
            <hr/>
            <div className='orderedItems'>
                {orderArray.length > 0 ? orderArray.map((item) => { return <PreviewCard key={getRandomKey()} details={item} /> }) : null}
            </div>
            <p className='totalPrice'>Total price: {totalPrice()}.-</p>
            <button className='button' onClick={handleClick}>Place order</button>
            </section>
       
        <h2 className="header">Your orders:</h2>
     
            <PendingOrder />
            <AcceptedOrder />
            <DeliveredOrder />
      
        </main>
    </>
    )
}

export default OrderPage;