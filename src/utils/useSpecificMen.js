import React, { useEffect, useState } from "react";
import { C_L_T_S } from "../constants";

const useSpecificMen = (id15) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const SpecificMen = async (id15) => {
    try {
      const response = await fetch(C_L_T_S + id15);
      if (!response.ok) throw new Error("Item not found"); // Handle 404
      const data = await response.json();
      setItem(data);
    } catch (error) {
      setError(error.message); // Store error as a string
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id15) {
      // Ensure id15 is not undefined
      SpecificMen(id15);
    }
  }, [id15]);

  return [item, error, loading];
};

export default useSpecificMen;
