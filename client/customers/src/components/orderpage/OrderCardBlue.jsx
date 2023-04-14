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
        <div className='group flex flex-col items-center'>
            <h3 className="bg-sky-400 w-64 text-xl text-center">
                <p>Your food will be done in:</p>
                <p>{countDown(pickupDate)}</p>
            </h3>
            <h4 className='absolute mt-16 flex flex-col items-center bg-black text-slate-200  invisible group-hover:visible'>{items.map((item => <p key={getRandomKey()}>{item.name}</p>))}</h4>
        </div>
    </>)
}