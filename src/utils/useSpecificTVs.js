import React, { useEffect, useState } from "react";

const useSpecificTVs = (id7) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const SpecificTVs = async () => {

    try {
      const response = await fetch("http://localhost:3500/api/electronics/TVs/" + id7);
      const data = await response.json();
      setItem(data);
      
    } catch (error) {
      setError(error);
      
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    SpecificTVs();
  }, [id7]);

  return [item,error,loading];
};

export default useSpecificTVs;
