import React, { useEffect, useState } from "react";
import { B_K_S } from "../constants";

const useSpecificBooks = (id19) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificBooks = async () => {
  
      try {
        const response = await fetch(B_K_S + id19 );
        const data = await response.json();
        setItem(data);
        
      } catch (error) {
        setError(error);
        
      }finally{
        setLoading(false);
      }
    };
  
    useEffect(() => {
      SpecificBooks();
    }, [id19]);
  
    return [item,error,loading];
}

export default useSpecificBooks
