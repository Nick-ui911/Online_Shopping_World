import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : "Dummy Name",
        email :"Dummy Email"
    }
});

// this is only for de-bugging purpose
UserContext.displayName = "UserContext"

export default UserContext;




 


// import { createContext, useContext, useState } from "react";

// // Create Context
// const CartContext = createContext();

// // Custom Hook for easy access
// export const useCart = () => useContext(CartContext);

// // Provider Component , if you not create a this component then you have to write logic of addtocart ,
//  removefromcart into app.js and your CartContext have above three line only, and provide all the logic in app.js like this
   {/* Directly provide CartContext here */}
//    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//    <Header />
//    <Outlet />
//    <Footer />
//  </CartContext.Provider>




// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Add to cart
//   const addToCart = (item) => {
//     setCartItems((prev) => [...prev, item]);
//   };

//   // Remove from cart
//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// then do this ;
// import { CartProvider } from "./context/CartContext";  // Import the CartProvider
// // other imports...

// const Applayout = () => {
//   const [seller, setSeller] = useState({
//     name: "Raj Babbar",
//     email: "nbaghel392@gmail.com",
//   });

//   return (
//     <Provider store={store}>
//       <UserContext.Provider value={{ seller: seller, setSeller: setSeller }}>
//         <CartProvider>  {/* Wrap with CartProvider */}
//           <Header />
//           <Outlet />
//           <Footer />
//         </CartProvider>
//       </UserContext.Provider>
//     </Provider>



// Now just access and use any where
// const { cartItems, addToCart, removeFromCart } = useCart(); 
