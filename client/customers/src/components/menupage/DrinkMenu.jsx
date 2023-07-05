import React, { useContext, useEffect } from 'react';
import globalContext from "../../globalContext.jsx";
import MenuCard from './MenuCard.jsx';


export default function () {
    const { items } = useContext(globalContext)
    const filterDrink = items.filter(item => item.categories.name === "Drink")

    return (
        <section className="menu">
            <h2 className="menuHeader">Drink's</h2>
            {filterDrink.map((item) => { return <MenuCard key={item['_id']} details={item} /> })}
        </section>
    )
}