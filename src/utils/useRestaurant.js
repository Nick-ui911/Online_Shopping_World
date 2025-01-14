import { useEffect,useState } from "react";
import { U_R_L } from "../constants";
// i am created my own hook;
const useRestaurant = (id) => {

    const [restaurant, setRestaurant] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      getRestaurantInfo();
    }, [id]);
  
    async function getRestaurantInfo() {
     
      try {
          const response = await fetch(U_R_L + id);
          if (!response.ok) {
              throw new Error('Network response was not ok'); // Throw error for non-2xx responses
          }
          const json = await response.json();
          setRestaurant(json);
      } catch (err) {
          setError(err.message); // Set error message if an error occurs
      } finally {
          setLoading(false); // Set loading to false after fetching
      }
  }

    return [restaurant,loading,error];

};

export default useRestaurant;