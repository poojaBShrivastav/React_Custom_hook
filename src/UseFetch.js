import React, { useCallback } from 'react'
import { useEffect,useState } from 'react'

export default function UseFetch(url) {

    const[error,seterror] = useState(null)
    const[loading,setloading] = useState(false)
    const [data,setdata] = useState([])

    const fetchData = useCallback(async ()=>{

        setloading(true)
        seterror(null)
        try{
                let res = await fetch(url)
            if(!res.ok){
                throw new Error("Error : "+res.status)
            }
            let cards = await res.json()
            setdata(cards);
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false)
        }
    },[url])

    useEffect(()=>{
        fetchData()
    },[fetchData])

  return{data,error,loading}
}
