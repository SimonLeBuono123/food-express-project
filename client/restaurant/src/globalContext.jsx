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

    return (
        <GlobalContext.Provider
            value={{
                tests
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalContext