import React, { useEffect, useState } from "react";
import { W_H_S } from "../constants";

const useSpecificWashingMachine = (id8) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificWashingMachine = async () => {
  
      try {
        const response = await fetch(W_H_S + id8);
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

