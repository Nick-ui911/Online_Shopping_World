import React, { useEffect, useState } from "react";

const useSpecificWashingMachine = (id8) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificWashingMachine = async () => {
  
      try {
        const response = await fetch("http://localhost:3500/api/electronics/WashingMachine/" + id8);
        const data = await response.json();
        setItem(data);
        
      } catch (error) {
        setError(error);
        
      }finally{
        setLoading(false);
      }
    };
  
    useEffect(() => {
      SpecificWashingMachine();
    }, [id8]);


  return [item,error,loading]
}

export default useSpecificWashingMachine

