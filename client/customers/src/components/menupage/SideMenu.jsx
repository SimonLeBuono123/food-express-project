import React, { useContext } from 'react';
import globalContext from "../../globalContext.jsx";
import MenuCard from './MenuCard.jsx';


export default function () {
    const { items } = useContext(globalContext)
    const filterSide = items.filter(item => item.categories.name === "Side")

    return (
        <section className="menu">
            <h2 className="menuHeader">Side's</h2>
            {filterSide.map((item) => { return <MenuCard key={item['_id']} details={item} /> })}
        </section>
    )
}