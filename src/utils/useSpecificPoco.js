import React, { useEffect, useState } from "react";

const useSpecificPoco = (id14) => {
      const [item, setItem] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
      
        const SpecificPoco = async () => {
      
          try {
            const response = await fetch("http://localhost:3500/api/Mobiles/Poco/" + id14);
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
