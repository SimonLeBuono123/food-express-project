import React, {useContext} from 'react';
import MenuCard from "../components/menupage/MenuCard.jsx";
import globalContext from "../globalContext.jsx";

function MenuPage() {
    const {items } = useContext(globalContext)
    const filterMain = items.filter(item => item.categories.name === "Main")
    const filterSide = items.filter(item => item.categories.name === "Side")
    const filterDrink = items.filter(item => item.categories.name === "Drink")
    return (<>
        <h1 className="w-full">Menu</h1>
            <div className="flex flex-col justify-center item-center bg-sky-500 gap-2">
                <h2 className="text-center">Main's</h2>
                <div className="w-full flex flexbox gap-2 pr-3 rounded-xl shadow-lg justify-center item-center">

    {filterMain.map( (item) => {return <MenuCard key={item['_id']} details={item} />})}
        </div>
                <h2 className="text-center">Side's</h2>
            <div className="w-full flex flexbox gap-2 pr-3 rounded-xl shadow-lg justify-center item-center">

                {filterSide.map( (item) => {return <MenuCard key={item['_id']} details={item} />})}
            </div>
                <h2 className="text-center">Drink's</h2>
            <div className="w-full flex flexbox gap-2 pr-3 rounded-xl shadow-lg justify-center item-center">

                {filterDrink.map( (item) => {return <MenuCard key={item['_id']} details={item} />})}
            </div>
            </div>
        </>
    );
}

export default MenuPage;