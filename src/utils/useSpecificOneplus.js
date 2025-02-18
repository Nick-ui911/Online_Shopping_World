import React, { useEffect, useState } from "react";
import { O_M_S } from "../constants";

const useSpecificOneplus = (id12) => {
    const [item, setItem] = useState(null);
       const [error, setError] = useState(null);
       const [loading, setLoading] = useState(true);
       
         const SpecificOneplus = async () => {
       
           try {
             const response = await fetch(O_M_S + id12);
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
