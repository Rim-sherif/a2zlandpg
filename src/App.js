import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Signup from "./Components/signup/signup";
import AboutUs from "./Components/AboutUS/AboutUS";
import Cart from "./Components/Cart/Cart";
import Layout2 from "./Components/Layout2/Layout2";
import Shop from "./Components/Shop/Shop";
import Profile from "./Components/Profile/Profile";
import ContactUs from "./Components/ContactUs/ContactUs";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Exploring from "./Components/Exploring/Exploring";
import TopSelling from "./Components/TopSelling/TopSelling";
import NavTabs from "./Components/navTabs/navTabs";
import Products from "./Components/Products/Products";
import Services from './Components/Services/Services'


// import { useContext, useEffect } from 'react';
// import { UserContext } from "../context/userToken";



const Router = createBrowserRouter([
 
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "details", element: <Details /> },
      { path: "shop", element: <Shop /> },
      { path: "contactus", element: <ContactUs /> },
      { path: "footer", element: <Footer /> },
      { path: "exploring", element: <Exploring /> },
      { path: "topselling", element: <TopSelling /> },
      { path: "navTabs", element: <NavTabs /> },
      { path: "prducts", element: <Products/> },
      { path: "services", element: <Services/> },
      {
        path: "aboutus",
        element: <Layout2 />,
        children: [
          { path: "", element: <AboutUs /> },
          
          { path: "navbar", element: <Navbar /> },
          
          { path: "cart", element: <Cart /> },
          
          
          { path: "profile", element: <Profile /> }
        ],
      },
    ],
  },
]);



export default function App() {
    // let {setToken} = useContext(UserContext)

  // useEffect(()=>{
  //   if(localStorage.getItem('userToken') !== null ){
  //   setToken(localStorage.getItem('userToken'))
  //   }
  // },[])
  return (
    <div className="root">
     
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}
