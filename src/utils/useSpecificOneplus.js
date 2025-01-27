import React, { useEffect, useState } from "react";

const useSpecificOneplus = (id12) => {
    const [item, setItem] = useState(null);
       const [error, setError] = useState(null);
       const [loading, setLoading] = useState(true);
       
         const SpecificOneplus = async () => {
       
           try {
             const response = await fetch("http://localhost:3500/api/Mobiles/Oneplus/" + id12);
             const data = await response.json();
             setItem(data);
             
           } catch (error) {
             setError(error);
             
           }finally{
             setLoading(false);
           }
         };
       
         useEffect(() => {
           SpecificOneplus();
         }, [id12]);
       
 
   return [item,error,loading]
}

export default useSpecificOneplus
