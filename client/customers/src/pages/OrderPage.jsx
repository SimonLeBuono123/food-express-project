import React, {useContext, useEffect, useState} from 'react';
import globalContext from "../globalContext.jsx";
import MenuCard from "../components/menupage/MenuCard.jsx";

function OrderPage() {
    const { items, orderArray } = useContext(globalContext)
    const {filter, setFilter} = useState([])
    const filterMain = items.filter((item, index) => item?._id === orderArray[index])


    useEffect(() => {
        console.log("DET HÄR SKA SKRIVAS UT", filterMain)
    }, [orderArray]);




    return (<>
            <h1 className="w-full">Menu</h1>
            <div className="flex flex-col justify-center item-center bg-sky-500 gap-2">
                <h2 className="text-center">Main's</h2>
                <div className="w-full flex flexbox gap-2 pr-3 rounded-xl shadow-lg justify-center item-center">
                    {items.map( (item) => {return <MenuCard key={item['_id']}  details={item} />})}

                </div>
               </div>

            <h1 className="w-full">ORDERS</h1>
            <div className="flex flex-col justify-center item-center bg-sky-500 gap-2">
                <h2 className="text-center">Main's</h2>
                <div className="w-full flex flexbox gap-2 pr-3 rounded-xl shadow-lg justify-center item-center">
                    {filterMain.map( (item) => {return <MenuCard key={item['_id']}  details={item} />})}

                </div>
            </div>
        </>
    )

}

export default OrderPage;