import React, { useEffect, useState } from "react";
import { C_L_T_S_W } from "../constants";

const useSpecificWomen = (id16) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const SpecificWomen = async (id16) => {
      try {
        const response = await fetch(
         C_L_T_S_W + id16
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
      if (id16) {
        // Ensure id15 is not undefined
        SpecificWomen(id16);
      }
    }, [id16]);
  
    return [item, error, loading];
}

export default useSpecificWomen
