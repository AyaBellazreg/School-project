import React, {createContext, useContext, useEffect , useState} from 'react'

const Context = createContext()
const storage = window.localStorage;

export const ContextProvider = ({children})=>{


    const [hasToken , setHasToken] = useState(false)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState({})

    useEffect(()=>{
        _getData()
    } , [])

    const _getData = async =>{
        try{
            const token = storage.getItem('hasToken')
            if(token!= null){
                setHasToken(JSON.parse(token))
                setLoading(false)
            }
        }catch(err){
            setError((prevState)=>({...prevState , getDataError : err}))
        }
    }

    const _addToStorage =  async ()=>{
        try {
         storage.setItem('hasToken' , JSON.stringify(hasToken))
            setHasToken(true)
        }catch(error){
                setError(error)
        }
    }

    return (
        <Context.Provider value = {{hasToken , loading , error , _addToStorage }} >
            {children}
        </Context.Provider>
    )
}

export const useStateValue = ()=> useContext(Context)