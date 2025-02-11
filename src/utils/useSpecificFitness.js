import React, { useEffect, useState } from "react";

const useSpecificFitness = (id22) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificFitness  = async () => {
  
      try {
        const response = await fetch("http://localhost:3500/api/Fitness/" + id22 );
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

export default useSpecificFitness
