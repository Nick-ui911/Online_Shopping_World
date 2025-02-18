import React, { useEffect, useState } from "react";
import { R_F_S } from "../constants";

const useSpecificRefrigerator = (id9) => {
   const [item, setItem] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
 
   const SpecificRefrigerator = async () => {
 
     try {
       const response = await fetch(R_F_S + id9);
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
