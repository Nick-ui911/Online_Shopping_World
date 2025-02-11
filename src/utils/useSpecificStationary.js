import React, { useEffect, useState } from "react";

const useSpecificStationary = (id20) => {
   const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificStationary  = async () => {
  
      try {
        const response = await fetch("http://localhost:3500/api/Stationary/" + id20 );
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

export default useSpecificStationary
