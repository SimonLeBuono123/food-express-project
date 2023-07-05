import React, { useContext } from 'react';

export default function ({ details }) {
    const { name, price } = details

    return (<>
        <div className='orderedItem'>
            <h3>{name}</h3>
            <p>{price}.-</p>
        </div>
    </>
    );
}