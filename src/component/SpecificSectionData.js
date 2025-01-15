import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";


const SpecificSectionData = () => {
    const { id4 } = useParams(); // Extract product ID from URL
    const location = useLocation(); // Extract the section from location state
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const apiBaseUrl = "http://localhost:3500";
  
    useEffect(() => {
      const fetchProductDetails = async () => {
        try {
          const section = new URLSearchParams(location.search).get("section");
          const response = await fetch(`${apiBaseUrl}/fashion/${id4}?section=${section}`);
          if (!response.ok) {
            throw new Error("Failed to fetch product details");
          }
          const result = await response.json();
          setProduct(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProductDetails();
    }, [id4, location]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div className="product-details">
        <h1>{product.name}</h1>
        <img src={product.image || "https://via.placeholder.com/300"} alt={product.name} />
        <p>Price: {product.price}</p>
        <p>Description: {product.description || "No description available"}</p>
      </div>
    );
  };


export default SpecificSectionData;
