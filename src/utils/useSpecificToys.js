import React, { useEffect, useState } from "react";
import { T_O_S } from "../constants";

const useSpecificToys = (id18) => {
 const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const SpecificToys = async () => {

    try {
      const response = await fetch(T_O_S + id18 );
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
