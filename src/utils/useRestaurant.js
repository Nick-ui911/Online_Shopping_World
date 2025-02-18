import { useEffect, useState } from "react";
import { U_R_L } from "../constants";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null); // Default to null for clarity
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return; // Prevent fetching if ID is invalid
        getRestaurantInfo();
    }, [id]);

    async function getRestaurantInfo() {
        try {
            const response = await fetch(U_R_L + id);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            setRestaurant(json);
        } catch (err) {
            setError(err.message);
            setRestaurant(null); // Ensure consistent data type
        } finally {
            setLoading(false);
        }
    }

    return [restaurant, loading, error];
};

export default useRestaurant;
