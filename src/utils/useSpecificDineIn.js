import React, { useState, useEffect } from "react";
import { D_I_N_2 } from "../constants";

const useSpecificDineIn = (id2) => {
  const [Ditem, setDitem] = useState([]); // Initialize as `null` for better clarity
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id2) {
      fetchDineData();
    }
  }, [id2]);

  const fetchDineData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(D_I_N_2 + id2);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();

      setDitem(json);
    } catch (err) {
      setError(err.message); // Set the error message
     console.log(error)
    }finally{
      setIsLoading(false);
    }
  };

  return [Ditem, error,isLoading];
};

export default useSpecificDineIn;
