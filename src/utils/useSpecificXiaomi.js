import React, { useEffect, useState } from "react";
import { X_M_S } from "../constants";

const useSpecificXiaomi = (id13) => {
    const [item, setItem] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
      
        const SpecificXiaomi = async () => {
      
          try {
            const response = await fetch(X_M_S + id13);
            const data = await response.json();
            setItem(data);
            
          } catch (error) {
            setError(error);
            
          }finally{
            setLoading(false);
          }
        };
      
        useEffect(() => {
          SpecificXiaomi();
        }, [id13]);
      

  return [item,error,loading]
}

export default useSpecificXiaomi
