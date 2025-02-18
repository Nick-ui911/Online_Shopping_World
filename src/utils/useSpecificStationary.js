import React, { useEffect, useState } from "react";
import { S_T_R_S } from "../constants";

const useSpecificStationary = (id20) => {
   const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificStationary  = async () => {
  
      try {
        const response = await fetch(S_T_R_S + id20 );
        const data = await response.json();
        setItem(data);
        
      } catch (error) {
        setError(error);
        
      }finally{
        setLoading(false);
      }
    };
  
    useEffect(() => {
      SpecificStationary();
    }, [id20]);
  
    return [item,error,loading];
}

export default useSpecificStationary;
