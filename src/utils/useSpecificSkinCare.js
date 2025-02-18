import React, { useEffect, useState } from "react";
import { S_C_S } from "../constants";

const useSpecificSkinCare = (id6) => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    SkinData();
  }, [id6]);

  const SkinData = async () => {
    try {
      const response = await fetch(
        S_C_S + id6
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setItem(data);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return [item,isLoading,error];
};

export default useSpecificSkinCare;
