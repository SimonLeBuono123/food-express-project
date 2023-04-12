import {createContext, useEffect, useState} from "react";

const GlobalContext = createContext(null)

export const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [tests, setTests] = useState([])
    const [auth, setAuth] = useState({loggedIn: false})
    const [items, setItems] = useState([])
    const [orderArray, setOrderArray] = useState([])
    const [order, setOrder] = useState([])

    useEffect(() => {
        void getTests()
        void getItems()
        void checkAuth()
        void getOrder()

        const intervalId = setInterval(() => {
            getOrder();
          }, 3000);
          return () => {
            clearInterval(intervalId);
          };
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
  
        setItems(result)
        setIsLoading(false)
    }

    const postOrder = async(items) => {
        setIsLoading(true)
        const response = await fetch('/rest/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                items
            })
        })
        const result = await response.json()
        console.log(result)
        setIsLoading(false)
        void getOrder()
    }

    const getOrder = async () => {
            setIsLoading(true)
            const response = await fetch("/rest/order");
            setOrder(await response.json());
            setIsLoading(false)
        }


    const getTests = async() => {
        setIsLoading(true)
        const response = await fetch('/rest/test')
        const result = await response.json()

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
                items,
                orderArray,
                setOrderArray,
                postOrder,
                order,
                getOrder
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalContext