import React, { useEffect, useState } from "react";
import { A_M_S } from "../constants";

const useSpecificApple = (id11) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
      const SpecificApple = async () => {
    
        try {
          const response = await fetch(A_M_S + id11);
          const data = await response.json();
          setItem(data);
          
        } catch (error) {
          setError(error);
          
        }finally{
          setLoading(false);
        }
      };
    
      useEffect(() => {
        SpecificApple();
      }, [id11]);
    

return [item,error,loading]
}

export default useSpecificApple
