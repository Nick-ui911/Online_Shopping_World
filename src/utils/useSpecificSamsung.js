import React, { useEffect, useState } from "react";


const useSpecificSamsung = (id10) => {
    const [item, setItem] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
      
        const SpecificSamsung = async () => {
      
          try {
            const response = await fetch("http://localhost:3500/api/Mobiles/Samsung/" + id10);
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
