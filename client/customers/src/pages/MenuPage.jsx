import React, { useContext, useEffect } from 'react';
import MenuCard from "../components/menupage/MenuCard.jsx";
import globalContext from "../globalContext.jsx";
import { Link } from "react-router-dom";

function MenuPage() {
    const { items, setOrderArray, orderArray } = useContext(globalContext)

    const filterMain = items.filter(item => item.categories.name === "Main")
    const filterSide = items.filter(item => item.categories.name === "Side")
    const filterDrink = items.filter(item => item.categories.name === "Drink")

    useEffect(() => {
        console.log(orderArray)
    }, [orderArray])

    return (<>
            <h1 className="w-full h-10 text-3xl text-center">Menu</h1>

            <div className="flex flex-row justify-center item-center gap-2">
                <div className="flex flex-wrap flex-col gap-4 p-10 justify-center bg-sky-500">
                    <h2 className="mt-3 h-10 text-2xl text-center">Main's</h2>
                    {filterMain.map((item) => { return <MenuCard key={item['_id']} details={item} /> })}
                </div>

                <div className="flex flex-wrap flex-col gap-4 p-10 bg-sky-500">
                    <h2 className="h-10 text-2xl text-center">Side's</h2>
                    {filterSide.map((item) => { return <MenuCard key={item['_id']} details={item} /> })}
                </div>

                <div className="flex flex-wrap flex-col gap-4 p-10 bg-sky-500">
                    <h2 className="h-10 text-2xl text-center">Drink's</h2>
                    {filterDrink.map((item) => { return <MenuCard key={item['_id']} details={item} /> })}
                </div>

            </div>
            <Link className='flex align-center justify-center' to={'/order'}><button className='bg-sky-500 mt-3'>Send me to order</button></Link>
        </>
    );
}

export default MenuPage;