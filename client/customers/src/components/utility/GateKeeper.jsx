import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import GlobalContext from "../../globalContext"

export default function () {
    const {auth} = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if (!auth.loggedIn) return navigate("/")
        else return
    },[auth])
}