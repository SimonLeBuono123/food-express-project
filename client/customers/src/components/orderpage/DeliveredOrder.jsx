import { useContext } from "react"
import globalContext from "../../globalContext"
import OrderCardRed from "./OrderCardRed"


export default function() {
    const {order, auth } = useContext(globalContext)
    const viewOrders = order.filter((item) => item?.customers?.email === auth?.email)

    function checkDelivered(arr) {
        return arr.isDelivered === true && arr.isAccepted === true
    }

    return(<>
  
    <div className="flex flex-row flex-wrap justify-center gap-2">
        <div className='menu pt-6'>
            <h1 className='header'>Completed</h1>
            {viewOrders.filter(checkDelivered).map((item) => { return <OrderCardRed key={item['_id']} details={item} /> })}
        </div>
    </div>
    </>)
}