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

    <div className="flex flex-row flex-wrap justify-center gap-2">
        <div className='menu pt-6'>
            <h1 className='header'>On hold</h1>
            {viewOrders.filter(checkPending).map((item) => { return <OrderCardYellow key={item['_id']} details={item} /> })}
        </div>
    </div>
    </>)
}