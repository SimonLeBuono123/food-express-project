import React, {useState} from "react";

export default function ({allOrders}) {

    allOrders.sort(
        (a, b) => {
            const dateA = new Date(a.orderDate)
            const dateB = new Date(b.orderDate)
            return dateA - dateB
        }
    )

    function handleClick() {
        console.log("Order confirmed");
    }

    let ordersList = allOrders.map((order) => {
        let itemsList = order.items.map((item) => {
            return (
                <li key={Math.random() * 99999} className="text-gray-600 mb-2">
                    - {item.name}
                </li>
            );
        });

        return (
            <li key={order._id} className="border p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{order.customers.fullName}</h2>
                    <button
                        className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg"
                        id={order._id}
                        onClick={handleClick}
                    >
                        Confirm
                    </button>
                </div>
                <p className="text-gray-500 text-sm mb-2">{order.orderDate}</p>
                <ul className="pl-4 mb-4">{itemsList}</ul>
                <p>{order.totalPrice} SEK</p>
                <p className="text-gray-600 text-sm">{order.isDelivered}</p>
            </li>
        );
    });
    ordersList = ordersList.sort(
        (a, b) => {
            a.orderDate - b.orderDate
        }
    );

    return <ul>{ordersList}</ul>;
}
