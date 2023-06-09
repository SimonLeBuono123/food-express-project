import React, { useContext, useState } from "react";
import globalContext from "../globalContext";

export default function ({ allOrders, setAllOrders }) {
  const { patchOrder } = useContext(globalContext);
  const [estimatedTime, setEstimatedTime] = useState(0);

  //sorts all orders in descending order based how long ago they were placed
  allOrders.sort((a, b) => {
    const dateA = new Date(a.orderDate);
    const dateB = new Date(b.orderDate);
    return dateA - dateB;
  });

  function handleOrder(id, isDelivered) {
    let newIsAccepted = true;
    let newIsDelivered = isDelivered;
    let newPickupDate = calculatePickupDate();
    let newTotalPrice = calculateTotalPrice(id);
    //handles display of order changes in the frontend
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
    setEstimatedTime(0);
    //handles order changes in the backend
    patchOrder(id, newPickupDate, newIsDelivered, newIsAccepted, newTotalPrice);
  }

  //calculates the total price of all items in an order
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

  //handles the estimated time until the delivery of an order
  function handleEstimatedTime(min) {
    if (estimatedTime <= 0 && min < 0) {
      return;
    } else {
      setEstimatedTime(estimatedTime + min);
    }
  }

  //returns the date when an order is estimated to be ready for delivery/pick-up
  function calculatePickupDate() {
    return new Date(Date.now() + estimatedTime * 60 * 1000);
  }

  //formats the date on which an order was placed
  function formatOrderDate(date) {
    let orderDate = new Date(date);
    let year = orderDate.getFullYear();
    let month = orderDate.getMonth() + 1; // Add 1 to get the month in  a readable format (0-indexed)
    let day = orderDate.getDate();

    return year.toString() + "/" + month.toString() + "/" + day.toString();
  }

  //returns a status string based on if the order has been accepted or accepted & delivered
  function handleOrderStatus(order) {
    if (order.isDelivered) {
      return `Order delivered.`;
    }
    if (!order.isAccepted) {
      return "Waiting for confirmation";
    } else if (order.isAccepted) {
      return `Estimated delivery in: ${Math.round(
        (new Date(order.pickupDate) - Date.now()) / (1000 * 60)
      )} min`;
    }
  }

  //handles the contents of the order card based on order status
  let ordersList = allOrders.map((order) => {
    let itemsList = order.items.map((item) => {
      return (
        <li key={Math.random() * 99999} className="text-gray-600 mb-2">
          - {item.name}
        </li>
      );
    });
    const orderStatusClass = order.isDelivered
      ? "border p-6 rounded-lg shadow-md mb-6 bg-gray-100"
      : "border p-6 rounded-lg shadow-md mb-6";
    return (
      <li key={order._id} className={orderStatusClass}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{order.customers.fullName}</h2>
          {!order.isAccepted ? (
            <button
              className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg"
              id={order._id}
              onClick={() => {
                handleOrder(order._id, false);
              }}
            >
              Confirm
            </button>
          ) : !order.isDelivered ? (
            <button
              className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg"
              id={order._id}
              onClick={() => {
                handleOrder(order._id, true);
              }}
            >
              Deliver
            </button>
          ) : null}
        </div>
        <p className="text-gray-600 text-sm">
          {formatOrderDate(order.placedDate)}
        </p>
        <p className="text-gray-500 text-sm mb-2">{`Placed ${Math.round(
          (Date.now() - new Date(order.placedDate)) / (1000 * 60)
        )} min ago`}</p>
        <ul className="pl-4 mb-4">{itemsList}</ul>
        <div className="flex flex-row items-center">
          {!order.isAccepted ? (
            <p>Confirm delivery in: {estimatedTime} min</p>
          ) : null}
          {!order.isAccepted ? (
            <button
              className="text-white bg-blue-500 hover:bg-blue-600 m-1 p-1 rounded-lg"
              onClick={() => {
                handleEstimatedTime(15);
              }}
            >
              +15
            </button>
          ) : null}
          {!order.isAccepted ? (
            <button
              className="text-white bg-blue-500 hover:bg-blue-600 m-1 p-1 rounded-lg"
              onClick={() => {
                handleEstimatedTime(-15);
              }}
            >
              -15
            </button>
          ) : null}
        </div>
        {order.isAccepted ? <p>{order.totalPrice.toString()} SEK</p> : null}

        <p>{"Status: " + handleOrderStatus(order)}</p>
      </li>
    );
  });

  return <ul>{ordersList}</ul>;
}
