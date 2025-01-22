import React from "react";
import { useEffect, useState } from "react";

const useSkinCare = () => {
  const [items, setItems] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getSkinCare();
  },[])

  async function getSkinCare() {
    try {
      const data = await fetch("http://localhost:3500/api/beauty-and-care/skin-care");
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
};

export default useSkinCare;
