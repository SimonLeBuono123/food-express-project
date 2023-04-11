import React, { useContext, useState } from "react";
import globalContext from "../globalContext";

export default function ({ allOrders, setAllOrders }) {
  const { patchOrder } = useContext(globalContext);
  const [estimatedTime, setEstimatedTime] = useState(0);

  function handleEstimatedTime() {
    setEstimatedTime(estimatedTime + 15);
  }

  function confirmOrder(event, id) {
    let newIsAccepted = true;
    let newIsDelivered = false;
    let newPickupDate = calculatePickupDate();
    let newTotalPrice = calculateTotalPrice(id);
    let updatedOrders = allOrders.map((order) => {
      if (order._id === id) {
        return {
          ...order,
          isAccepted: newIsAccepted,
          isDelivered: newIsDelivered,
          pickupDate: newPickupDate,
          totalPrice: newTotalPrice,
        };
      }

      return order;
    });
    setAllOrders(updatedOrders);
    patchOrder(id, newPickupDate, newIsDelivered, newIsAccepted, newTotalPrice);

    setEstimatedTime(0);
  }

  function calculateTotalPrice(_id) {
    let result = 0;
    allOrders.map((order) => {
      if (order._id === _id) {
        order.items.map((item) => {
          result = result + item.price;
        });
      }
    });
    return result;
  }

  function calculatePickupDate() {
    return new Date(Date.now() + estimatedTime * 60 * 1000);
  }

  function formatOrderDate(date) {
    let orderDate = new Date(date);
    let year = orderDate.getFullYear();
    let month = orderDate.getMonth() + 1; // Add 1 to get the month in human-readable format (0-indexed)
    let day = orderDate.getDate();

    return year.toString() + "/" + month.toString() + "/" + day.toString();
  }

  function handleOrderStatus(order) {
    if (order.isDelivered) {
      return `Order delivered`;
    }

    if (!order.isAccepted) {
      return "Waiting for confirmation";
    } else if (order.isAccepted) {

      return `Order confirmed, estimated delivery: ${Math.round(
        (new Date(order.pickupDate) - Date.now()) / (1000 * 60))} min`;
    }
  }

  allOrders.sort((a, b) => {
    const dateA = new Date(a.orderDate);
    const dateB = new Date(b.orderDate);
    return dateA - dateB;
  });

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
        <p className="text-gray-600 text-sm">
          {formatOrderDate(order.placedDate)}
        </p>
        <p className="text-gray-500 text-sm mb-2">{`Wait time: ${Math.round(
          (Date.now() - new Date(order.placedDate)) / (1000 * 60)
        )} min`}</p>
        <ul className="pl-4 mb-4">{itemsList}</ul>
        {(order.isAccepted) ? <p>{order.totalPrice.toString()} SEK</p> : null}

        <p>{"Status: " + handleOrderStatus(order)}</p>
      </li>
    );
  });
  ordersList = ordersList.sort((a, b) => {
    a.orderDate - b.orderDate;
  });

  return <ul>{ordersList}</ul>;
}
