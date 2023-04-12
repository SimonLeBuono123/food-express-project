import { useContext } from "react"
import globalContext from "../../globalContext"


export default function(){
    const { auth, submitLogout } = useContext(globalContext)

    return <>
    {auth?.loggedIn ? <button onClick={submitLogout} className='logOutButton'>Log out</button> : null}
    </>
}