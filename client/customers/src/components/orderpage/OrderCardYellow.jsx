import React from 'react';
import getRandomKey from '../utility/getRandomKey';


export default function ({ details }) {
    const { items } = details

    return (<>
        
       
            <div className='pendingOrderItemGroup'>
                <div>{items.map((item => <p key={getRandomKey()}>{item.name}</p>))}</div>
            </div>
      
    </>)
}