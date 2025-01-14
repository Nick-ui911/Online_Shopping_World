import { useEffect,useState } from "react";
import { ALL_DATA_URL } from "../constants";
const useBody = () => {
     // we are rendering filteredRestaurants render function(line no 94) then you think why i need allRestaurants ,because of searching property which we make here;
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRestaurant();
      }, []);
    
      async function getRestaurant() {
        try {
            const data = await fetch(ALL_DATA_URL);
            if (!data.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await data.json();
            setAllRestaurants(json);
            setFilteredRestaurants(json);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        } finally {
            setLoading(false);
        }
    }
      return [filteredRestaurants,allRestaurants,loading,setFilteredRestaurants];
};

export default useBody;