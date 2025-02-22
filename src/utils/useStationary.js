import React, { useEffect,useState } from 'react'
import { S_T_R } from '../constants';

const useStationary = () => {

    const [items , setItems] = useState(null);
    const [allItem , setAllItem] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(()=>{
        Stationary();
    },[])

    const Stationary = async () => {
        try {
            const response = await fetch(S_T_R);
            if(!response){
                throw new Error('Failed to fetch data')
            }
            const data = await response.json();
            setItems(data?.Stationary);
            setAllItem(data?.Stationary);
            
        } catch (error) {
            setError(error);
            
        }finally{
            setLoading(false);
        }
    }
  return [items,allItem,setItems,error,loading];
}

export default useStationary
