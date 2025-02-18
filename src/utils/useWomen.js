import React, { useEffect, useState } from "react";
import { C_L_T } from "../constants";

const useWomen = () => {
    const [items, setItems] = useState(null);
        const [allItem, setAllItem] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          Women();
        }, []);
        const Women = async () => {
          try {
            const response = await fetch(C_L_T);
            if (!response) {
              throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setItems(data?.WomenFashion);
            setAllItem(data?.WomenFashion);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
      
        return [items, allItem, setItems, error, loading];
  
     
}

export default useWomen
