import React, { useContext, useEffect } from 'react';
import globalContext from "../../globalContext.jsx";
import MenuCard from './MenuCard.jsx';


export default function () {
    const { items } = useContext(globalContext)
    const filterMain = items.filter(item => item.categories.name === "Main")

    return (
        <section className="menu">

            <h2 className="menuHeader">Main's</h2>

            {filterMain.map((item) => { return <MenuCard key={item['_id']} details={item} /> })}
        </section>
    )
}