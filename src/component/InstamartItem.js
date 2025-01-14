import { useParams } from "react-router-dom";
import useSpecificInstaItem from "../utils/useSpecificInstamartItem";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import StarRating from "./StarRating";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { Shimmer } from "./shimmer";
import InstaCard from "./Instacard";
import { Link } from "react-router-dom";
import useInstamartItem from "../utils/useInstamart";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';


const Instaitem = () => {
  const { id1 } = useParams();
  const { seller } = useContext(UserContext);
  const { mitem, error, isLoading } = useSpecificInstaItem(id1);
  const [item] = useInstamartItem();

  if (isLoading) {
    return <Shimmer/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  const dispatch = useDispatch();


  const addInstaItem = (item) => {
    dispatch(addItem(item));
    Swal.fire({
      title: '<h3 style="color: #4CAF50;">Item Added!</h3>',
      html: `<p style="font-size: 16px;">${item.name} has been added to your cart.</p>`,
      icon: 'success',
      confirmButtonText: '<span style="color: white;">Continue Shopping</span>',
      background: '#fefae0', // Custom background color
      iconColor: '#4CAF50', // Custom icon color
      customClass: {
        popup: 'custom-popup',
        confirmButton: 'custom-confirm-button',
      },
    });
  };

  return (
   <>
    <div className="instaitem-container">
      <div className="image-section">
        <img src={mitem.image} alt={mitem.name} className="item-image" />
        <div className="button-container">
          <button onClick={()=>addInstaItem(mitem)} className="order-button">ADD TO CART</button>
        </div>
      </div>
      <div className="details-section">
        <h1 className="item-name">Item Name: {mitem.name}</h1>
        <h2 className="item-price">Price: ${mitem.price}</h2>
      </div>
      <h4>Seller:{seller.name}</h4>
      <div className="additional-data">
  <div className="nav-buttons">
    <button onClick={() => handleButtonClick("/review")} className="nav-button">
      Reviews
    </button>
    <button onClick={() => handleButtonClick("/soldby")} className="nav-button">
      Sold By
    </button>
  </div>
  <div className="star-rating-section">
    <StarRating />
  </div>
</div>
    </div>
    <div className="related-heading">
        <h1>Related Products</h1>
      </div>
    <div className="allcards">
        {item.map((val) => {
          return (
            <Link className="nick" to={`/instamart/${val.id}`} key={val.id}>
              <InstaCard {...val} />
            </Link>
          );
        })}
      </div>
   </>
  );
};

export default Instaitem;
