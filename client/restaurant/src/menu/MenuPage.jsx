import {useState, useContext, useEffect} from "react";
import globalContext from '../globalContext.jsx'

export default function () {

    const { allItems } = useContext(globalContext)
    const [items, setItems] = useState()
/*
    useEffect(()=>{
        setItems(allItems)
    }, [] )
*/

    console.log(allItems)

    return <section className={'h-screen w-screen flex'}>
        <h2>Main</h2>

        <h2>Condiments</h2>

        <h2>Drinks</h2>

        </section>
}