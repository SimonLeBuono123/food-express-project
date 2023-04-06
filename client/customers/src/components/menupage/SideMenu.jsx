import React, { useContext, useEffect } from 'react';
import globalContext from "../../globalContext.jsx";
import MenuCard from './MenuCard.jsx';

export default function () {
    const { items } = useContext(globalContext)
    const filterSide = items.filter(item => item.categories.name === "Side")

    return (
        <div className="menu">
            <h2 className="menuHeader">Side's</h2>
            {filterSide.map((item) => { return <MenuCard key={item['_id']} details={item} /> })}
        </div>
    )
}