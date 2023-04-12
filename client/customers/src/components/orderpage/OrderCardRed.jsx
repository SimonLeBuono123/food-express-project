import React from 'react';
import getRandomKey from '../utility/getRandomKey';

export default function ({ details }) {
    const { items, isDelivered, isAccepted, pickupDate } = details

    return (<>
        {isAccepted && isDelivered ? <><h3 className="bg-red-900 w-64 text-xl text-center group">Delivered order</h3>
            <div className='group flex flex-col items-center'>
                <h4 className='absolute mt-16 bg-black text-slate-200  invisible group-hover:visible'>{items.map((item => <p key={getRandomKey()}>{item.name}</p>))}</h4>
            </div>
        </> : null}
    </>)
}