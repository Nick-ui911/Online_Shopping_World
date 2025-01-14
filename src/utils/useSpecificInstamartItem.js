import { useEffect, useState } from "react";
import { N_R_L } from "../constants";

const useSpecificInstaItem = (id1) => {
  const [mitem, setMitem] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Martdata();
  }, [id1]);

  const Martdata = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(N_R_L + id1);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let json = await response.json();
      setMitem(json);

    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { mitem, error, isLoading };
};
export default useSpecificInstaItem;
