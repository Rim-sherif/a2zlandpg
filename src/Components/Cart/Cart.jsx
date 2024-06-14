import React from "react";
import img1 from "../../assets/Rectangle 11.png";
import img2 from "../../assets/Rectangle 12.png";
import img3 from "../../assets/Rectangle 13.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
export default function Cart() {
  return (
    <>
      <Navbar />
      <div className="container our-shop">
        <h2 className="text-center py-4">Your Shopping</h2>
        <div className="row g-3">
          <div className="col-md-3  ">
            <img src={img1} className="w-100" alt="" />
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3>Modern Soft Chair </h3>
                <p>
                  The Modern Soft Chair boasts <br /> a harmonious{" "}
                </p>

                <h6 className=" text-main">Price : 500 $ </h6>
              </div>
              <div>
                <button className=" btn py-1 btn-secondary">+</button>
                <span className="mx-3"> 4 </span>
                <button className="btn py-1 btn-danger">-</button>
              </div>
            </div>
            <div className="d-flex align-items-center ">
              <button className="p-0 btn  ">
                <i className="fas fa-trash-can font-sm text-danger "></i>{" "}
                <span className="px-1">Remove</span>
              </button>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="col-md-3 ">
            <img src={img2} className="w-100" alt="" />
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3>Modern Soft Chair </h3>
                <p>
                  The Modern Soft Chair boasts <br /> a harmonious{" "}
                </p>

                <h6 className=" text-main">Price : 500 $ </h6>
              </div>
              <div>
                <button className=" btn py-1 btn-secondary">+</button>
                <span className="mx-3"> 4 </span>
                <button className="btn py-1 btn-danger">-</button>
              </div>
            </div>
            <div className="d-flex align-items-center ">
              <button className="p-0 btn  ">
                <i className="fas fa-trash-can font-sm text-danger "></i>{" "}
                <span className="px-1">Remove</span>
              </button>
            </div>
          </div>
          <div className="border-bottom"></div>

          <div className="col-md-3 ">
            <img src={img3} className="w-100" alt="" />
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3>Modern Soft Chair </h3>
                <p>
                  The Modern Soft Chair boasts <br /> a harmonious{" "}
                </p>

                <h6 className=" text-main">Price : 500 $ </h6>
              </div>
              <div>
                <button className=" btn py-1 btn-secondary">+</button>
                <span className="mx-3"> 4 </span>
                <button className="btn py-1 btn-danger">-</button>
              </div>
            </div>
            <div className="d-flex align-items-center ">
              <button className="p-0 btn  ">
                <i className="fas fa-trash-can font-sm text-danger "></i>{" "}
                <span className="px-1">Remove</span>
              </button>
            </div>
          </div>

          <div className="border-bottom"></div>
        </div>

        {/* Order Summary */}

        <div className="row">
          <div className="col-md-6">
            <div className="Totally py-5 ">
              <h4 className="py-3">Order Summary</h4>
              <div className="d-flex justify-content-between price border-bottom py-2">
                <h3>Subtotal</h3>
                <h3>$565</h3>
              </div>
              <div className="d-flex justify-content-between price border-bottom py-2">
                <h3>Discount (-20%)</h3>
                <h3>424</h3>
              </div>
              <div className="d-flex justify-content-between price border-bottom py-2">
                <h3>Delivery Fee</h3>
                <h3>$424</h3>
              </div>
              <div className="d-flex justify-content-between price  py-2">
                <h5>Total </h5>
                <h5>$467</h5>
              </div>
            </div>
          </div>

          <div className="col-md-6 btn-cart py-5 m-auto text-center ">
            <button className="text-white btn-1 w-75 my-3">
              <Link to="/checkout" className="a">
                Go to Check out{" "}
              </Link>
            </button>
            <button className=" btn-2 w-75 ">
              <Link to="/shop" className="a">
                Continue Shopping{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
