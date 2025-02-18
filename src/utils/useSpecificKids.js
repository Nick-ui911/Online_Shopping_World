import React, { useEffect, useState } from "react";
import { C_L_T_S_K } from "../constants";

const useSpecificKids = (id17) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const SpecificKids = async (id17) => {
    try {
      const response = await fetch(
       C_L_T_S_K + id17
      );
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
    if (id17) {
      // Ensure id15 is not undefined
      SpecificKids(id17);
    }
  }, [id17]);

  return [item, error, loading];
}

export default useSpecificKids
