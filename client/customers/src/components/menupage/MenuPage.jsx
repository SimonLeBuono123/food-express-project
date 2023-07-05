import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import MainMenu from './MainMenu.jsx';
import SideMenu from './SideMenu.jsx';
import DrinkMenu from './DrinkMenu.jsx';
import globalContext from "../../globalContext.jsx";
import GateKeeper from '../utility/gateKeeper.jsx';
import LogOutButton from '../loginpage/LogOutButton.jsx';


function MenuPage() {
    const { orderArray } = useContext(globalContext)

    function getRandomKey() {
        return Math.floor(Math.random() * 100000);
    }

    return (<>
        <GateKeeper />
        <header>
            <nav>
                <Link to={'/order'}><button className='icon cartIcon'></button></Link>
                <LogOutButton />

            </nav>
        </header>

        <main>
            <div className='menuTopLogo'>
                <div className='imageWrapper'>
                    <img src='././assets/logo.jpg' />
                </div>
            </div>
            <MainMenu />
            <SideMenu />
            <DrinkMenu />
        </main>
    </>
    );
}

export default MenuPage;