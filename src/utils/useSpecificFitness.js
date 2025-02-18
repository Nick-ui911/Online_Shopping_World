import React, { useEffect, useState } from "react";
import { F_F_S } from "../constants";

const useSpecificFitness = (id22) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificFitness  = async () => {
  
      try {
        const response = await fetch(F_F_S + id22 );
        const data = await response.json();
        setItem(data);
        
      } catch (error) {
        setError(error);
        
      }finally{
        setLoading(false);
      }
    };
  
    useEffect(() => {
      SpecificFitness();
    }, [id22]);
  
    return [item,error,loading];
}

export default useSpecificFitness;
