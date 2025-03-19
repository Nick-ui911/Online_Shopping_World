import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Footer from "./component/footer";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import { Shimmer } from "./component/shimmer";
import Instaitem from "./component/InstamartItem";
import About from "./component/About";
import DineInHotel from "./component/DineInHotel";
import UserAddress from "./utils/UserAddress";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Home from "./component/Home";
import HomeKitchen from "./component/HomeKitchen";
import Beauty from "./component/Beauty";
import Stationary from "./component/Stationary";
import Electronics from "./component/Electronics";
import Books from "./component/Books";
import Clothing from "./component/Clothing";
import Toys from "./component/Toys";
import Mobiles from "./component/Mobiles";
import SpecificTrending from "./component/SpecificTrending";
import TermCondition from "./component/TermCondition";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Products from "./component/Products";
import Review from "./component/Review";
import SoldBy from "./component/SoldBy";
import Trending from "./component/Trending";
import MyBooking from "./component/MyBooking";
import AuthPage from "./component/AuthPage";
import Favorite from "./component/Favorite";
import SpecificHairCare from "./component/SpecificHairCare";
import SpecificSkinCare from "./component/SpecificSkinCare";
import SpecificTVs from "./component/SpecificTVs";
import SpecificRefrigerator from "./component/SpecificRefrigerator";
import SpecificWashingMachine from "./component/SpecificWashingMachine";
import SpecificSamsung from "./component/SpecificSamsung";
import SpecificApple from "./component/SpecificApple";
import SpecificOneplus from "./component/SpecificOneplus";
import SpecificXiaomi from "./component/SpecificXiaomi";
import SpecificPoco from "./component/SpecificPoco";
import SpecificMen from "./component/SpecificMen";
import SpecificWomen from "./component/SpecificWomen";
import SpecificKids from "./component/SpecificKids";
import SpecificToys from "./component/SpecificToys";
import SpecificBooks from "./component/SpecificBooks";
import SpecificStationary from "./component/SpecificStationary";
import SpecificHomeKitchen from "./component/SpecificHomeKitchen";
import SpecificFitness from "./component/SpecificFitness";
import Restaurant from "./component/Restaurant ";




// import Samsung from "./component/Samsung";
// import Apple from "./component/Apple";
// import Xiaomi from "./component/Xiaomi";
// import Poco from "./component/Poco";
// import Oneplus from "./component/Oneplus";
const Dineout = lazy(() => import("./component/Dineout"));
const Instamart = lazy(() => import("./component/instamart"));
const Fitness = lazy(() => import("./component/Fitness"));
const SkinCare = lazy(() => import("./component/SkinCare"));
const HairCare = lazy(() => import("./component/HairCare"));
const Men = lazy(() => import("./component/Men"));
const Women = lazy(() => import("./component/Women"));
const Kids = lazy(() => import("./component/Kids"));
const TVs = lazy(() => import("./component/TVs"));
const WashingMachine = lazy(() => import("./component/WashingMachine"));
const Refrigerator = lazy(() => import("./component/Refrigerator"));
const Samsung = lazy(() => import("./component/Samsung"));
const Apple = lazy(() => import("./component/Apple"));
const Xiaomi = lazy(() => import("./component/Xiaomi"));
const Poco = lazy(() => import("./component/Poco"));
const Oneplus = lazy(() => import("./component/Oneplus"));


const Applayout = () => {
  const [seller, setSeller] = useState({
    name: "Raj Babbar",
    email: "nbaghel392@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ seller: seller, setSeller: setSeller }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
// here we do nexted route configuration , in this configuration header and footer component will always there the only what change is outlet according route
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <AuthPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },

      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/instamart/:id1",
        element: <Instaitem />,
      },
      {
        path: "/fitness",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Fitness/>
          </Suspense>
        ),
      },
      {
        path: "/dineout",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Dineout />
          </Suspense>
        ),
      },
      {
        path: "/dineout/:id2",
        element: <DineInHotel />,
      },
      {
        path: "/trending/:id3",
        element: <SpecificTrending />,
      },
      {
        path: "/useraddress",
        element: <UserAddress />,
      },
      {
        path: "/homekitchen",
        element: <HomeKitchen />,
      },
      {
        path: "/stationary",
        element: <Stationary />,
      },
      {
        path: "/beauty",
        element: <Beauty />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/homekitchen",
        element: <HomeKitchen />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/clothing",
        element: <Clothing />,
      },
      {
        path: "/men",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Men/>
          </Suspense>
        ),
      },
      {
        path: "/women",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Women/>
          </Suspense>
        ),
      },
      {
        path: "/kids",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Kids />
          </Suspense>
        ),
      },
      {
        path: "/men/:id15",
        element: <SpecificMen />,
      },
      {
        path: "/women/:id16",
        element: <SpecificWomen />,
      },
      {
        path: "/kids/:id17",
        element: <SpecificKids/>,
      },
      
      {
        path: "/toys",
        element: <Toys />,
      },
      {
        path: "/toys/:id18",
        element: <SpecificToys />,
      },
      {
        path: "/books/:id19",
        element: <SpecificBooks />,
      },
      {
        path: "/stationary/:id20",
        element: <SpecificStationary />,
      },
      {
        path: "/homekitchen/:id21",
        element: <SpecificHomeKitchen />,
      },
      {
        path: "/fitness/:id22",
        element: <SpecificFitness />,
      },
      {
        path: "/mobiles",
        element: <Mobiles />,
      },
      {
        path: "/termcondition",
        element: <TermCondition />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/soldby",
        element: <SoldBy />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/mybooking",
        element: <MyBooking />,
      },
      {
        path: "/favorite",
        element: <Favorite/>,
      },
      {
        path: "/skincare",
        element: (
          <Suspense fallback={<Shimmer />}>
            < SkinCare/>
          </Suspense>
        ),
      },
      {
        path: "/haircare",
        element: (
          <Suspense fallback={<Shimmer />}>
            <HairCare />
          </Suspense>
        ),

      },
      {
        path:"/beauty-and-care/hairCare/:id5",
        element:<SpecificHairCare/>
       
      },
      {
        path:"/beauty-and-care/skinCare/:id6",
        element:<SpecificSkinCare/>
      },
      {
        path:"/TVs",
        element: (
          <Suspense fallback={<Shimmer />}>
            <TVs/>
          </Suspense>
        ),
      },
      {
        path:"/washingmachine",
        element: (
          <Suspense fallback={<Shimmer />}>
            <WashingMachine/>
          </Suspense>
        ),
      },
      {
        path:"/refrigerator",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Refrigerator/>
          </Suspense>
        ),
      },
      {
        path:"/electronics/TVs/:id7",
        element:<SpecificTVs/>
      },
      {
        path:"/electronics/Refrigerator/:id9",
        element:<SpecificRefrigerator/>
      },
      {
        path:"/electronics/WashingMachine/:id8",
        element:<SpecificWashingMachine/>
      },{
        path:"/samsung",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Samsung/>
          </Suspense>
        ),
      },
      {
        path:"/apple",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Apple/>
          </Suspense>
        ),
      },
      {
        path:"/xiaomi",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Xiaomi />
          </Suspense>
        ),
      },
      {
        path:"/oneplus",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Oneplus/>
          </Suspense>
        ),
      },
      {
        path:"/poco",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Poco/>
          </Suspense>
        ),
      },{
        path:"/Mobiles/Samsung/:id10",
        element:<SpecificSamsung/>

      },
      {
        path:"/Mobiles/Apple/:id11",
        element:<SpecificApple/>
      },
      {
        path:"/Mobiles/Oneplus/:id12",
        element:<SpecificOneplus/>
      },
      {
        path:"/Mobiles/Xiaomi/:id13",
        element:<SpecificXiaomi/>
      },
      {
        path:"/Mobiles/Poco/:id14",
        element:<SpecificPoco/>
      }
     
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
