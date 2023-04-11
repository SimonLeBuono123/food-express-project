import { useState, useContext, useEffect } from "react";
import globalContext from "../globalContext.jsx";
import OrderCard from "./OrderCard.jsx";

export default function () {
    const { orders } = useContext(globalContext);
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        setAllOrders(orders);
    }, [orders]);
//console.log(orders)
    return (
        <section className={"h-screen w-screen flex flex-col m-5 md:flex-row"}>
            <OrderCard allOrders={allOrders} setAllOrders={setAllOrders} />
        </section>
    );
}
