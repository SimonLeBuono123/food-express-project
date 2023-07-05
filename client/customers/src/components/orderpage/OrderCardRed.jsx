import React from 'react';
import getRandomKey from '../utility/getRandomKey';


export default function ({ details }) {
    const { items, isDelivered, isAccepted, pickupDate } = details

    return (<>
        <div className='pendingOrderItemGroup'>
            <p>We cooked you:</p>
            <div>{items.map((item => <p key={getRandomKey()}>{item.name}</p>))}</div>
            </div>

    </>)
}