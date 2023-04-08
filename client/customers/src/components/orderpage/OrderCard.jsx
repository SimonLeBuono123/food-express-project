import React from 'react';


function OrderCard({ details }) {
    const { items, isDelivered } = details

    return (
        <>
        <div className='flex flex-col justify-center items-center'>
        <h3 className="bg-sky-400 w-64 ">{isDelivered}</h3>
        <p className='w-64 text-center bg-sky-400'>
        {items.map( item => {item.name})}
        </p>
        </div>
        </>
    );
}

export default OrderCard