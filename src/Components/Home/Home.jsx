import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/9829 2.png";
import img1 from '../../assets/Group 48095419.png'
import img2 from '../../assets/Group 48095420.png'
import img3 from '../../assets/Group 48095428.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img from '../../assets/Rectangle 1446.png'
import imgphone from '../../assets/Feature 2.png'


export default function Home() {
  return (
    <>
      <div className="landpage">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <img className="navbar-brand" src={logo} alt="" height={100} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto me-2 mb-lg-0 menu ">
                <li className="nav-item nav-sec ">
                  <Link className="nav-link main-text" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link main-text" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link main-text" to="#">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item style-link">
                  <Link className="nav-link main-text" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item style-link">
                  <Link className="nav-link main-text bg-white " to="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="content  text-center ">
            <h1 className="text-white ">
              Brining Your DreamHome <br /> To Life{" "}
            </h1>
            <p className="text-white py-2 ">
              Turn your room with A2Z into a lot more minimalist <br /> and
              modern with ease and speed
            </p>
            <div className="style-search">
              <input
                type="search"
                className="form-control mx-auto    "
                placeholder="Search..."
              />
              {/* <i className="fa-solid fa-magnifying-glass text-white  "></i> */}
            </div>
          </div>
        </div>
        

      </div>
      <div className="container w-75 py-5">
    <div className="about-sec">
      <h2>Why Choosing Us ?</h2>
      <div className="row g-2 ">
        <div className="col-md-4  p-4">
          <h4 className=''>Luxury facilities</h4>
          <p className='main-font'>The advantage of Dealing with us is that gives you comfortable service and all-around facilities.</p>
        </div>

         <div className="col-md-4  p-4">
          <h4>Affordable Price</h4>
          <p className='main-font'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are only here.</p>
        </div>
         <div className="col-md-4  p-4">
          <h4>Many Choices</h4>
          <p className='main-font'>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
        </div>
      </div>

      <div className="row pt-5">
      <div className="col-md-6">
      <img src={img} className='w-100 shadow' alt="" />
      </div>

      <div className="col-md-6">
        <p className='fs-1 fw-bold'>We provide you the best experience</p>
        <p className='about-p py-2'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
      </div>
      </div>
    </div>
  </div>
      <div className="container w-75">
    <h2 className=' text-center py-3' >
    Our Gallery To Help You Reach Your Vasion 
    </h2>
  <OwlCarousel className='owl-theme'  loop   nav autoplayTimeout={2000} autoplay={true} items={3}>
    <div className='item'>
    <img src={img2} className=' '  width={300} height={500} alt="" />
    </div>
    <div className="item">

    <img src={img1} className=' 'width={300}   height={500} alt="" />
    </div>
    <div className="item">

    <img src={img3} className=' ' width={300}  height={500} alt="" />
    </div>

   
    </OwlCarousel>
 
  </div>
  <div className="container w-75 pt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 footer-style">
          <h2>Mobile App</h2>
          <p className=''>A phone application to help you reach us wherever you are and facilitate all your operations</p>
        </div>

        <div className="col-md-6">
          <img src={imgphone} className='w-75' alt="" />
        </div>
      </div>




      

    </div>
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
  );
}
