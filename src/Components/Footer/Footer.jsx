import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/9829 2.png";


export default function Footer() {
  return <>
   {/* <footer className="navbar navbar-expand-lg mt-5 py-3">
  <div class="container-fluid">
        <div class="row px-xl-5 pt-5">
            <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <Link to="" class="text-decoration-none">
                    <h1 class="mb-4 display-5 font-weight-bold"><span class="text-white font-weight-bold border border-white px-3 mr-1">AtoZ</span>Decoration</h1>
                </Link>
                <p className='text-white'>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                <p class="mb-2 text-white"><i class="fa fa-map-marker-alt text-white mr-3"></i>123 Street, New York, USA</p>
                <p class="mb-2 text-white"><i class="fa fa-envelope text-white mr-3"></i>info@example.com</p>
                <p class="mb-0 text-white"><i class="fa fa-phone-alt text-white mr-3"></i>+012 345 67890</p>
            </div>
            <div class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-white mb-4">Quick Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <Link class="text-decoration-none text-white mb-2 " to="index"><i class="fa fa-angle-right mr-2"></i>Home</Link>
                            <Link class="text-decoration-none text-white mb-2" to="shop"><i class="fa fa-angle-right mr-2"></i>Our Shop</Link>
                            <Link class="text-decoration-none text-white mb-2" to="detail"><i class="fa fa-angle-right mr-2"></i>Shop Detail</Link>
                            <Link class="text-decoration-none text-white mb-2" to="cart"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</Link>
                            <Link class="text-decoration-none text-white mb-2" to="checkout"><i class="fa fa-angle-right mr-2"></i>Checkout</Link>
                            <Link class="text-decoration-none text-white" to="contact"><i class="fa fa-angle-right mr-2"></i>Contact Us</Link>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-white mb-4">Quick Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <Link class="text-decoration-none text-white mb-2" to="index"><i class="fa fa-angle-right mr-2"></i>Home</Link>
                            <Link class="text-decoration-none text-white mb-2" to="shop"><i class="fa fa-angle-right mr-2"></i>Our Shop</Link>
                            <Link class="text-decoration-none text-white mb-2" to="detail"><i class="fa fa-angle-right mr-2"></i>Shop Detail</Link>
                            <Link class="text-decoration-none text-white mb-2" to="cart"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</Link>
                            <Link class="text-decoration-none text-white mb-2" to="checkout"><i class="fa fa-angle-right mr-2"></i>Checkout</Link>
                            <Link class="text-decoration-none text-white" to="contact"><i class="fa fa-angle-right mr-2"></i>Contact Us</Link>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-white mb-4">Newsletter</h5>
                        <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control border-0 py-4" placeholder="Your Name" required="required" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control border-0 py-4 mt-2" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button class="btn btn-primary btn-block border-0 py-3 mt-2" type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
    </footer>
    <div class="row border-top border-light mx-xl-5 py-4">
            <div class="col-md-6 px-xl-0">
                <p class="mb-md-0 text-center text-md-left ">
                    &copy; <Link class="text-decoration-none  font-weight-semi-bold" to="#">AtoZ.</Link>. All Rights Reserved. Designed
                    by
                    <Link class="text-decoration-none  font-weight-semi-bold" to="https://htmlcodex.com">Fci Tu Team</Link><br/>
                    Distributed By <Link to="https://themewagon.com" target="_blank">Dr.Mostafa Al-Ashry</Link>
                </p>
            </div>
            <div class="col-md-6 px-xl-0 text-center text-md-right">
                <img class="img-fluid" src="img/payments.png" alt=""/>
            </div>
        </div> */}


 <footer className="navbar navbar-expand-lg mt-5 py-3">
        <div className="container-fluid">
          <img className="navbar-brand ms-5" src={logo} alt="" height={100} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-2 mb-lg-0 menu ">

              <li className="nav-item nav-sec ">
                <Link className="nav-link text-white" to="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">About Us</Link>
              </li><li className="nav-item">
                <Link className="nav-link text-white" to="#">Contact Us</Link>
              </li>

            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item me-5 ">
                <i className='fab fa-facebook mx-3 main-text'></i>
                <i className='fab fa-twitter mx-3 main-text'></i>
                <i className='fab fa-instagram mx-3 main-text'></i>
       
              </li>


            </ul>
          </div>
        </div>
      </footer> 
  
  </>
}
