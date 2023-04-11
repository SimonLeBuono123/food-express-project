import React, { useContext, useState } from "react";
import globalContext from "../globalContext";

export default function ({ allOrders, setAllOrders }) {
  const { patchOrder } = useContext(globalContext);
  const [estimatedTime, setEstimatedTime] = useState(0);

  function handleEstimatedTime() {
    setEstimatedTime(estimatedTime + 15);
  }

  function calculatePickupDate() {
      return new Date(Date.now() + estimatedTime * 60 * 1000)
  }


  function confirmOrder(event, id) {
    let newIsAccepted = true;
    let newIsDelivered = false;
    let newPickupDate = calculatePickupDate();
    let newTotalPrice = calculateTotalPrice(id);
    let updatedOrders = allOrders.map((order) => {
      if (order._id === id) {
        return { ...order, 
            isAccepted: newIsAccepted,
            isDelivered: newIsDelivered,
            pickupDate: newPickupDate,
            totalPrice: newTotalPrice
        };
      }

      return order;
    });
    setAllOrders(updatedOrders);
    patchOrder(id, newPickupDate, newIsDelivered, newIsAccepted, newTotalPrice);


    setEstimatedTime(0);
  }

  allOrders.sort((a, b) => {
    const dateA = new Date(a.orderDate);
    const dateB = new Date(b.orderDate);
    return dateA - dateB;
  });

  function calculateTotalPrice(_id) {
      let result = 0
allOrders.map(order => {
    if (order._id === _id) {
    order.items.map(item => {
        result = result + item.price
    })

}

})
      return result
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
            onClick={handleEstimatedTime}
          >
            Add 15
          </button>
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg"
            id={order._id}
            onClick={(event) => {
              confirmOrder(event, order._id);
            }}
          >
            Confirm
          </button>
        </div>
        <p className="text-gray-500 text-sm mb-2">{`order wait: ${Math.floor(
          (Date.now() - new Date(order.orderDate)) / (1000 * 60)
        )} min`}</p>
        <ul className="pl-4 mb-4">{itemsList}</ul>
        <p>{order.totalPrice} SEK</p>
        <p className="text-gray-600 text-sm">{order.isDelivered}</p>

      </li>
    );
  });
  ordersList = ordersList.sort((a, b) => {
    a.orderDate - b.orderDate;
  });

  return <ul>{ordersList}</ul>;
}