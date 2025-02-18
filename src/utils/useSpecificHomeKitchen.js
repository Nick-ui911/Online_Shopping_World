import React, { useEffect, useState } from "react";
import { H_K_S } from "../constants";

const useSpecificHomeKitchen = (id21) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificHomekitchen = async () => {
  
      try {
        const response = await fetch(H_K_S + id21 );
        const data = await response.json();
        setItem(data);
        
      } catch (error) {
        setError(error);
        
      }finally{
        setLoading(false);
      }
    };
  
    useEffect(() => {
        SpecificHomekitchen();
    }, [id21]);
  
    return [item,error,loading];
}

export default useSpecificHomeKitchen
