import React, {useContext} from 'react';
import globalContext from "../globalContext.jsx";
import ResponseCard from "../components/responsepage/ResponseCard.jsx";

function ResponsePage() {
    const {order, auth} = useContext(globalContext)

    const responsedOrder = order.filter(item => item.isDelivered === "ordered" && item.customers.email === auth.email)
    const sentOrder = order.filter(item => item.isDelivered === "Waiting for Restaurant" && item.customers.email === auth.email)

    return (
        <div>
            <h3>Confirmed orders: </h3>
            { responsedOrder.map((item) => {return <ResponseCard key={item['_id']} details={item }/> })}
            <h3>Waiting for response:  </h3>
            { sentOrder.map((item) => {return <ResponseCard key={item['_id']} details={item } /> })}

        </div>
    );
}

export default ResponsePage;