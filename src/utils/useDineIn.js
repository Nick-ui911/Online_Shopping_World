import React from 'react'
import { D_I_N } from '../constants';
import { useEffect, useState } from "react";


const useDineIn = () => {
  const [data, setData] = useState([]);
   const [allData, setAllData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null); // New state for error handling
 
   let dinedata = async () => {
     try {
       let response = await fetch(D_I_N);
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       let data = await response.json();
       setData(data);
       setAllData(data);
     } catch (err) {
       setError(err.message); // Set error message
     } finally {
       setLoading(false); // Ensure loading is set to false
     }
   };
 
   useEffect(() => {
     dinedata();
   }, []);


   return [data,allData,setData,loading,error]
 
}

export default useDineIn
