import React from 'react';

function ResponseCard({details}) {
    const { name, items, isDelivered } = details
    return (
        <div>
            <h3 className="text-center bg-white w-64 " >Order: {isDelivered}</h3>
            <p>Items: </p>{items.map((item)=> {return <p> {item.name}</p> })}

        </div>
    );
}

export default ResponseCard;