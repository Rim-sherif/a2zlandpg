import React from "react";
import img from "../../assets/user.svg";
import img2 from "../../assets/cart.svg";
import { Link } from "react-router-dom";


export default function Navbar() {
 
  return (
    <>
      <div className="">
        <nav
          className="custom-navbar navbar navbar navbar-expand-lg navbar-dark "
          arial-label="Furni navigation bar"
        >
          <div className="container">
            <Link className="navbar-brand a" to="index.html">
              A2Z<span>.</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsFurni"
              aria-controls="navbarsFurni"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item ">
                  <Link className="nav-link a" to="/aboutus">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link a" to="/shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="nav-link a" to="about.html">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="nav-link a" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="nav-link a" to="/exploring">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="nav-link a" to="/contactus">
                    Contact us
                  </Link>
                </li>
              </ul>

              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <li className="nav-item dropdown">
                  <div className="dropdown">
                    <button
                      className="btn"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Link className="nav-link a" to="">
                        <img src={img} alt="" />
                      </Link>
                    </button>
                    <ul
                      className="dropdown-menu mt-4 bg-white"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <div class="card-body w-75 px-3">
                        <div className="d-flex">
                          <i class="fa-solid fa-envelope p-2 fa-lg mt-2"></i>
                          <p className="mt-1 fw-bold">Reem@gmail.com</p>
                        </div>

                        <button
                          type="button"
                          class="btn d-flex text-center fw-bold"
                          id="logoutBtn"
                        >
                          <i class="fa-solid fa-arrow-right-from-bracket d-flex p-2"></i>
                          Logout
                        </button>
                      </div>
                    </ul>
                  </div>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link a mt-2" to="cart.html">
                    <img src={img2} alt="" />
                  </Link>
                </li>
            
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
