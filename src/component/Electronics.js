import React from 'react'
import { Link } from 'react-router-dom';

const Electronics = () => {
  return (
     <div className="beauty-container">
       <h1 className="beauty-title">Discover Our Electronics Range </h1>
       <p className="beauty-subtitle">Choose a category to explore:</p>
       <div className="beauty-buttons">
         <Link to="/TVs">
           <button className="beauty-btn skincare-btn">TVs</button>
         </Link>
         <Link to="/washingmachine">
           <button className="beauty-btn haircare-btn">Washing Machine</button>
         </Link>
         <Link to="/refrigerator">
           <button className="beauty-btn haircare-btn">Refrigerator</button>
         </Link>
       </div>
     </div>
   );
}

export default Electronics;
