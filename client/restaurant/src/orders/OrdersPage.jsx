import { useState, useContext, useEffect } from "react";
import globalContext from "../globalContext.jsx";
import OrderCard from "./OrderCard.jsx";

export default function () {
    const { orders } = useContext(globalContext);
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        let filteredOrders = orders.filter(order => !order.isDelivered)
        setAllOrders(filteredOrders);
    }, [orders]);
    return (
        <section className={"h-screen w-screen flex flex-col justify-start items-center mt-8"}>
            <h2 className={"text-3xl m-4 font-bold"}>Orders</h2>
            <OrderCard allOrders={allOrders} setAllOrders={setAllOrders} />
        </section>
    );
}
