import React from 'react';


function OrderCard({ details }) {
    const { items, isDelivered } = details

    return (
        <>
            <div>
        <h3 className="text-center bg-sky-400 w-64 ">{isDelivered}</h3>
        {items.map( item => <p>{item.name}</p>)}
    </div>
        </>
    );
}

export default OrderCard