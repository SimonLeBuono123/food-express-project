import React from 'react';
import getRandomKey from '../utility/getRandomKey';

export default function ({ details }) {
    const { items, isDelivered, isAccepted, pickupDate } = details

    return (<>
        {isAccepted && !isDelivered ? <>
            <div className='group flex flex-col items-center'>
                <h3 className="bg-sky-400 w-64 text-xl text-center">The restaurant is prepering this order it will be done at {pickupDate}</h3>
                <h4 className='absolute mt-16 flex flex-col items-center bg-black text-slate-200  invisible group-hover:visible'>{items.map((item => <p key={getRandomKey()}>{item.name}</p>))}</h4>
            </div>
        </> : null}
    </>)
}