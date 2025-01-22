import React from 'react'
import { useEffect, useState } from "react";

const useSpecificHairCare = (id5) => {

  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      HairData();
    }, [id5]);
  
    const HairData = async () => {
      
      try {
        let response = await fetch("http://localhost:3500/api/beauty-and-care/hairCare/" + id5);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let json = await response.json();
        setItem(json);
  
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    
  return [item,isLoading,error];
}

export default useSpecificHairCare
