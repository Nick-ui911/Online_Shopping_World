import React, { useEffect, useState } from "react";

const useSpecificToys = (id18) => {
 const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const SpecificToys = async () => {

    try {
      const response = await fetch("http://localhost:3500/api/Toys/" + id18 );
      const data = await response.json();
      setItem(data);
      
    } catch (error) {
      setError(error);
      
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    SpecificToys();
  }, [id18]);

  return [item,error,loading];
}

export default useSpecificToys
