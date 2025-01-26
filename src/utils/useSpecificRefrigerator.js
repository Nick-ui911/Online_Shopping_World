import React, { useEffect, useState } from "react";

const useSpecificRefrigerator = (id9) => {
   const [item, setItem] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
 
   const SpecificRefrigerator = async () => {
 
     try {
       const response = await fetch("http://localhost:3500/api/electronics/Refrigerator/" + id9);
       const data = await response.json();
       setItem(data);
       
     } catch (error) {
       setError(error);
       
     }finally{
       setLoading(false);
     }
   };
 
   useEffect(() => {
     SpecificRefrigerator();
   }, [id9]);
 
   return [item,error,loading];
}

export default useSpecificRefrigerator
