import { useEffect,useState } from "react";
import { I_R_L } from "../constants";

const useInstamartItem = () =>{
    const [item, setItem] = useState([]);
    const [allitem, setAllItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State to hold error messages

  
  
    useEffect(() => {
      data();
    }, []);
    const data = async () => {
     
      try {
          let response = await fetch(I_R_L);
          if (!response.ok) {
              throw new Error('Network response was not ok'); // Throw error for non-2xx responses
          }
          let json = await response.json();
          setItem(json);
          setAllItem(json);
      } catch (err) {
          setError(err.message); // Set error message if an error occurs
      } finally {
          setLoading(false); // Set loading to false after fetching
      }
  };

    return [item,allitem,loading,setItem,setAllItem,error];



};

export default useInstamartItem ;