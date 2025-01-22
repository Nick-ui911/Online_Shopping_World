import React from 'react'
import { useEffect, useState } from "react";

const useHairCare = () => {



 const [items, setItems] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getHairCare();
  },[])

  async function getHairCare() {
    try {
      const data = await fetch("http://localhost:3500/api/beauty-and-care/hair-care");
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();
      setItems(json);
      setFilterItem(json);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  }
  return [items,filterItem,setFilterItem,loading];



 
}

export default useHairCare
