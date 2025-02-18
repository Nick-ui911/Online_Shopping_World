import React, { useEffect, useState } from "react";
import { P_M_S } from "../constants";

const useSpecificPoco = (id14) => {
      const [item, setItem] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
      
        const SpecificPoco = async () => {
      
          try {
            const response = await fetch(P_M_S + id14);
            const data = await response.json();
            setItem(data);
            
          } catch (error) {
            setError(error);
            
          }finally{
            setLoading(false);
          }
        };
      
        useEffect(() => {
          SpecificPoco();
        }, [id14]);
      

  return [item,error,loading]
}

export default useSpecificPoco
