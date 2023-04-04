import {createContext, useEffect, useState} from "react";
import {json} from "react-router-dom";
import * as trace_events from "trace_events";


const GlobalContext = createContext(null)

export const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [tests, setTests] = useState([])
    const [auth, setAuth] = useState({loggedIn: false})
    const [items, setItems] = useState([])

    useEffect(() => {
        void getTests()
        void getItems()
        void checkAuth()
    }, [])


    const checkAuth = async () => {
        setIsLoading(true)
        const response = await fetch("/rest/customers/login")
        console.log('loading auth')
        const result = await response.json()
        console.log('auth state: ', result)
        setAuth(result)
        setIsLoading(false)
    }

    const submitLogin = async(email, password) => {
        setIsLoading(true)
        const response = await fetch('/rest/customers/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const result = await response.json()
        console.log(result)
        setIsLoading(false)
        void checkAuth()
    }

    const submitLogout = async() => {
        setIsLoading((true))
        const response = await fetch('/rest/customers/login', {
            method: 'DELETE'
        })
        const result = await response.json()
        console.log(result)
        setIsLoading(false)
        setAuth({loggedIn:false})
    }

    const getItems = async ()=> {
        setIsLoading(true)
        const response = await fetch('/rest/items')
        const result = await response.json()
        console.log(result)
        setItems(result)
        setIsLoading(false)
    }


    const getTests = async() => {
        setIsLoading(true)
        const response = await fetch('/rest/test')
        const result = await response.json()
        console.log(result)
        setTests(result)
        setIsLoading(false)
    }



    const registerAccount = async (fullName, email, password)=>{
        setIsLoading(true)
        const response = await fetch('/rest/customers', {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                password: password
            })
        })
        const result = await response.json()
        alert(result.message)
        setIsLoading(false)
    }

    return (
        <GlobalContext.Provider
            value={{
                tests,
                registerAccount,
                submitLogout,
                submitLogin,
                auth,
                items
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalContext