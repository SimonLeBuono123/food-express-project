import { useContext } from "react"
import globalContext from "../../globalContext"
import OrderCardBlue from "./OrderCardBlue"


export default function() {
    const {order, auth } = useContext(globalContext)
    const viewOrders = order.filter((item) => item?.customers?.email === auth?.email)

    function checkAccepted(arr) {
        return arr.isAccepted === true && arr.isDelivered === false
    }

    return(<>

  
        <section className="orderResponseSection">
            <h1 className='header'>Cooking</h1>
            <div className='ordersWrapper'>
            {viewOrders.filter(checkAccepted).map((item) => { return <OrderCardBlue key={item['_id']} details={item} /> })}
            </div>
        </section>
  
    </>)
}