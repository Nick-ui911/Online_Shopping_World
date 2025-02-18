import React, { useEffect, useState } from "react";
import { S_M_S } from "../constants";


const useSpecificSamsung = (id10) => {
    const [item, setItem] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
      
        const SpecificSamsung = async () => {
      
          try {
            const response = await fetch(S_M_S + id10);
            const data = await response.json();
            setItem(data);
            
          } catch (error) {
            setError(error);
            
          }finally{
            setLoading(false);
          }
        };
      
        useEffect(() => {
          SpecificSamsung();
        }, [id10]);
      

  return [item,error,loading]
}

export default useSpecificSamsung;
