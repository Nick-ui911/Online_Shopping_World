import React, { useEffect, useState } from "react";

const useSpecificApple = (id11) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
      const SpecificApple = async () => {
    
        try {
          const response = await fetch("http://localhost:3500/api/Mobiles/Apple/" + id11);
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
