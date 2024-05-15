import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavTabs from "../navTabs/navTabs";
import Products from "../Products/Products";


export default function Shop() {
 
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="my-3">Living Room Furniture</h1>
          </div>
          <div className="col-12 d-flex">
            <div className="col-8 details d-flex">
              <p>
                <span className="dts-span">Home / Shop</span>
              </p>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <div className="d-flex all-s">
                <div className="dts-s d-flex justify-content-center align-items-center">
                  <i className="far fa-bookmark pt-2"></i>
                  <span className="px-1">Save</span>
                </div>
                <div className="px-3 dts-s d-flex justify-content-center align-items-center">
                  <i className="fas fa-share-alt pt-2"></i>
                  <span className="px-1">Share</span>
                </div>
              </div>
            </div>
          </div>
          <NavTabs/>
          <Products/>
          
         
        </div>
      </div>

      <Footer />
    </div>
  );
}
