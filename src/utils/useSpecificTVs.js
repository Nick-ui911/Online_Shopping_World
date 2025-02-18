import React, { useEffect, useState } from "react";
import { T_V_S } from "../constants";

const useSpecificTVs = (id7) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const SpecificTVs = async () => {

    try {
      const response = await fetch(T_V_S + id7);
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
