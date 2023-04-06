import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import MainMenu from '../components/menupage/MainMenu.jsx';
import SideMenu from '../components/menupage/SideMenu.jsx';
import DrinkMenu from '../components/menupage/DrinkMenu.jsx';
import globalContext from "../globalContext.jsx";


function MenuPage() {
    const { orderArray } = useContext(globalContext)
    return (<>
        {orderArray.length > 0 ? <Link to={'/order'}><button className='button fixed top-50 left-0'>Place order</button></Link> : null}
        <h1 className="w-full h-10 text-3xl text-center">Menu</h1>
        <div className="flex flex-row flex-wrap justify-center gap-2">
            <MainMenu />
            <SideMenu />
            <DrinkMenu />
        </div>

    </>
    );
}

export default MenuPage;