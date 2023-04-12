import React from 'react';
import getRandomKey from '../utility/getRandomKey';


export default function ({ details }) {
    const { items } = details

    return (<>
            <div className='group flex flex-col items-center'>
                <h3 className="bg-yellow-400 w-72 text-xl text-center">Waiting for the restaurant to respond</h3>
                <h4 className='absolute mt-16 bg-black text-slate-200  invisible group-hover:visible'>{items.map((item => <p key={getRandomKey()}>{item.name}</p>))}</h4>
            </div>
    </>)
}