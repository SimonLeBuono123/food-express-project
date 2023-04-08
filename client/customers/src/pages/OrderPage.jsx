import React, { useContext, useEffect, useState } from 'react';
import globalContext from "../globalContext.jsx";
import OrderCard from '../components/orderpage/orderCard.jsx';
import PreviewCard from "../components/orderpage/PreviewCard.jsx";
import { Link } from 'react-router-dom';


function OrderPage() {
    const { orderArray, order, auth, postOrder } = useContext(globalContext)
    const viewOrders = order.filter((item) => item?.customers?.email === auth?.email)
    function getRandomKey() {
        return Math.floor(Math.random() * 100000);
    }

    console.log(orderArray.map(item => item.name))
    return (<>
        {orderArray.length === 0 ?
            <>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h2 className="header">No items chosen to chew on</h2>
                    <Link to={'/menu'}><button className='button'>Go to the menu</button></Link>               
                    </div>
            </> :
            <>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h2 className="header">You are about to order</h2>
                    <div className='bg-slate-300 w-1/2'>
                        {orderArray.length > 0 ? orderArray.map((item) => { return <PreviewCard key={getRandomKey()} details={item} /> }) : null}
                    </div>
                    <button className='button' onClick={() => { postOrder(orderArray) }}>Place order</button>
                </div>
                <div className="flex flex-col items-center gap-2">
                    {viewOrders.length > 0 ? <h2 className="menuHeader">Your current orders:</h2> : null}
                    {viewOrders.length > 0 ?
                        viewOrders.map((item) => { return <OrderCard key={item['_id']} details={item} /> })
                        : null
                    }
                </div>

            </>
        }
    </>
    )

}

export default OrderPage;