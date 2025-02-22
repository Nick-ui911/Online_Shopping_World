import React, { useEffect,useState } from 'react'
import { T_O } from '../constants';

const useToys = () => {

    const [items , setItems] = useState(null);
    const [allItem , setAllItem] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(()=>{
        Toys();
    },[])

    const Toys= async () => {
        try {
            const response = await fetch(T_O);
            if(!response){
                throw new Error('Failed to fetch data')
            }
            const data = await response.json();
            setItems(data?.Toys);
            setAllItem(data?.Toys);
            
        } catch (error) {
            setError(error);
            
        }finally{
            setLoading(false);
        }
    }
  return [items,allItem,setItems,error,loading];
}

export default useToys
