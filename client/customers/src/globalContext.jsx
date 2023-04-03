import {createContext, useEffect, useState} from "react";


const GlobalContext = createContext(null)

export const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [tests, setTests] = useState([])

    useEffect(() => {
        void getTests()
    }, [])

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
        console.log(result)
        setIsLoading(false)
    }

    return (
        <GlobalContext.Provider
            value={{
                tests,
                registerAccount
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalContext