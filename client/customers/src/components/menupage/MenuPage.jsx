import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import MainMenu from './MainMenu.jsx';
import SideMenu from './SideMenu.jsx';
import DrinkMenu from './DrinkMenu.jsx';
import globalContext from "../../globalContext.jsx";
import PreviewCard from '../orderpage/PreviewCard.jsx';


function MenuPage() {
    const { orderArray } = useContext(globalContext)

    function getRandomKey() {
        return Math.floor(Math.random() * 100000);
    }

    return (<>
        {orderArray.length > 0 ? 
        <>
        <div className='flex flex-col fixed top-0 left-0 w-32 z-10'>
        <Link to={'/order'}><button className='button'>Place order</button></Link>
        <div className='bg-slate-100'>
            {orderArray.map((item) => { return <PreviewCard key={getRandomKey()} details={item} /> })}
        </div>
        </div>
        </>   : null}
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