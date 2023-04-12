import React from 'react';
import getRandomKey from '../utility/getRandomKey';


export default function ({ details }) {
    const { items, isDelivered, isAccepted, pickupDate } = details

    return (<>
        <div className='group flex flex-col items-center'>
            <h3 className="bg-red-900 w-64 text-xl text-center">Delivered order</h3>
            <h4 className='absolute mt-16 flex flex-col items-center bg-black text-slate-200  invisible group-hover:visible'>{items.map((item => <p key={getRandomKey()}>{item.name}</p>))}</h4>
        </div>

    </>)
}