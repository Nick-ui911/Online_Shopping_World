import React, { useEffect,useState } from 'react'


const useRefrigerator = () => {

   const [items , setItems] = useState(null);
     const [allItem , setAllItem] = useState(null);
     const [loading , setLoading] = useState(true);
     const [error , setError] = useState(null);
 
     useEffect(()=>{
         RefrigeratorData();
     },[])
 
     const RefrigeratorData = async () => {
         try {
             const response = await fetch("http://localhost:3500/api/electronics/Refrigerator");
             if(!response){
                 throw new Error('Failed to fetch data')
             }
             const data = await response.json();
             setItems(data);
             setAllItem(data);
             
         } catch (error) {
             setError(error);
             
         }finally{
             setLoading(false);
         }
     }
   return [items,allItem,setItems,error,loading];
}

export default useRefrigerator
