import React from 'react';
import getRandomKey from '../utility/getRandomKey';


export default function ({ details }) {
    const { items, pickupDate } = details

    function countDown(date) {
        const timeDifference = new Date(date) - new Date()
        const minutes = Math.round(timeDifference / 1000 / 60)
        if (minutes < 0) {
            return " Time Has Expired"
        }
        return `${minutes} min`
    }

    return (<>

            <div className='pendingOrderItemGroup'>
                <p>Your order: {items.map((item => <p key={getRandomKey()}>{item.name}</p>))} will be done in:{countDown(pickupDate)}</p>
            </div>
           
  
    </>)
}