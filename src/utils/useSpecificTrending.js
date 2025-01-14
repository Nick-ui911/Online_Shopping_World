import React, { useState, useEffect } from "react";
import { T_R_N_2 } from "../constants";

const useSpecificTrending = (id3) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    TrendingData();
  }, [id3]);

  const TrendingData = async () => {
    setLoading(true);
    try {
      const response = await fetch(T_R_N_2 + id3);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setItem(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [item, loading, error];
};

export default useSpecificTrending;