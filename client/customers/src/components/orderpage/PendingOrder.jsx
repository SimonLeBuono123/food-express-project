import { useContext } from "react"
import globalContext from "../../globalContext"
import OrderCardYellow from "./OrderCardYellow"


export default function() {
    const {order, auth } = useContext(globalContext)
    const viewOrders = order.filter((item) => item?.customers?.email === auth?.email)

    function checkPending(arr) {
        return arr.isAccepted === false && arr.isDelivered === false
    }
    return(<>

    <section className="orderResponseSection">
    <h1>Estimating Time:</h1>
    <div className='ordersWrapper'>
            {viewOrders.filter(checkPending).map((item) => { return <OrderCardYellow key={item['_id']} details={item} /> })}
            </div>
    </section>
    </>)
}