import React from 'react';


function OrderCard({ details }) {
    const { items, isDelivered, isAccepted, pickupDate} = details

    return (
        <>
        <div className='flex flex-col justify-center items-center'>
        {!isAccepted ? <h3 className="bg-yellow-400 w-72 text-xl text-center">Waiting for the restaurant to respond</h3>
        : 
        <h3 className="bg-sky-400 w-64 text-xl text-center">The restaurant is prepering this order it will be done at {pickupDate} </h3>}
        {isDelivered ? <h3 className="bg-red-900 w-64 text-xl text-center">Delivered order</h3>: null}
        </div>
        </>
    );
}

export default OrderCard