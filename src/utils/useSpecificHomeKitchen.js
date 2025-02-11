import React, { useEffect, useState } from "react";

const useSpecificHomeKitchen = (id21) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificHomekitchen = async () => {
  
      try {
        const response = await fetch("http://localhost:3500/api/HomeKitchen/" + id21 );
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
