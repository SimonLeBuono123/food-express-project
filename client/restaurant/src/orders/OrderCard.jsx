import React from "react";

export default function({ allOrders }){

    function handleClick(){
        console.log('Order confirmed')
    }

    const ordersList = allOrders.map((order) => {

        console.log(order)

        return (
            <li
                key={order._id}
                className="flex items-center justify-between m-5"
            >
                <div>
                    <div className="flex flex-col border">
                        <h2 className="font-bold">{order.customers.fullName}</h2>
                        <button
                            className="text-red-500 cursor-pointer"
                            id={order._id}
                            onClick={handleClick}
                        >
                            CONFIRM
                        </button>
                        <p>{order.orderDate}</p>
                        <p>{order.isDelivered}</p>
                        <p>{order.totalPrice}</p>
                        <p>{order.items.name}</p>
                    </div>

                </div>
            </li>
        );
    });
    return <>
    {ordersList}
    </>
}