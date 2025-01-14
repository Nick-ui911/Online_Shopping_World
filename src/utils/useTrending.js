import React, { useEffect, useState } from "react";
import { T_R_N } from "../constants";

const useTrending = () => {
 const [trending, setTrending] = useState([]);
  const [searchTrending, setSearchTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      TrendingItem();
    }, []);

      async function TrendingItem() {
        setLoading(true);
        try {
          const response = await fetch(T_R_N);
          if (!response.ok) {
            throw new Error("Failed to fetch trending data");
          }
          const data = await response.json();
          setTrending(data);
          setSearchTrending(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }

      return [trending,setTrending,searchTrending,loading,error];
    
}

export default useTrending;
