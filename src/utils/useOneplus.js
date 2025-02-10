import React, { useEffect,useState } from 'react'

const useOneplus = () => {
    const [items , setItems] = useState(null);
        const [allItem , setAllItem] = useState(null);
        const [loading , setLoading] = useState(true);
        const [error , setError] = useState(null);
    
        useEffect(()=>{
            Oneplus();
        },[])
    
        const Oneplus = async () => {
            try {
                const response = await fetch("http://localhost:3500/api");
                if(!response){
                    throw new Error('Failed to fetch data')
                }
                const data = await response.json();
                setItems(data?.Mobiles?.Oneplus);
                setAllItem(data?.Mobiles?.Oneplus);
                
            } catch (error) {
                setError(error);
                
            }finally{
                setLoading(false);
            }
        }



  return [items,allItem,setItems,error,loading]
}

export default useOneplus
