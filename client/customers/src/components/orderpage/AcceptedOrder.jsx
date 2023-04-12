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

    <div className="flex flex-row flex-wrap justify-center gap-2">
        <div className='menu pt-6'>
            <h1 className='header'>Pending</h1>
            {viewOrders.filter(checkAccepted).map((item) => { return <OrderCardBlue key={item['_id']} details={item} /> })}
        </div>
    </div>
    </>)
}