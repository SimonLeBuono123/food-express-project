import React, { useContext } from 'react';



function OrderCard({ details }) {
    const { items, isDelivered } = details

   /* function viewItems (){
        for (let i = 0; i>items.length; i++) {
            return items[i]
        }
    }*/

    return (
        <>
            <div>
        <h3 className="text-center bg-sky-400 w-64 ">{isDelivered}</h3>
                <p>Pooperino</p>
    </div>
        </>
    );
}

export default OrderCard