import { useContext } from "react"
import globalContext from "../../globalContext"
import OrderCardRed from "./OrderCardRed"


export default function () {
    const { order, auth } = useContext(globalContext)
    const viewOrders = order.filter((item) => item?.customers?.email === auth?.email)

    function checkDelivered(arr) {
        return arr.isDelivered === true && arr.isAccepted === true
    }

    return (<>


        <section className="orderResponseSection">
            <h1 className='header'>Fulfilled</h1>
            <div className='ordersWrapper'>
            {viewOrders.filter(checkDelivered).map((item) => { return <OrderCardRed key={item['_id']} details={item} /> })}
            </div>
        </section>

    </>)
}