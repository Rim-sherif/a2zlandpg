import React from 'react';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import img1 from "../../assets/All.png";
import img2 from "../../assets/bestseller.png";
import img3 from "../../assets/New.png";
import img4 from "../../assets/UPComing.png";
import img5 from "../../assets/image 26.png";
import img6 from "../../assets/image 22.png";
import img7 from "../../assets/image 23.png";
import img8 from "../../assets/image 24.png";
import img9 from "../../assets/image 25.png";
import img10 from "../../assets/image 27.png";



export default function Exploring() {
  /* global $ */
  useEffect(() => {
    $('#pagination-demo').twbsPagination({
      totalPages: 35,
      visiblePages: 7,
      onPageClick: function (event, page) {
        $('#page-content');
      }
    });
  }, []);


  return <>
  <Navbar/>
  <div className="Gallery-sec">
      <div className="container">
        <div className="gallery-dec text-center py-3">
          <div className="gallery-h6">
            <h6 className="p-1">Check Our Collection</h6>
          </div>
          <h5>Our Furniture Gallery</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.</p>
        </div>
        <div className="gallery-items d-flex text-center justify-content-center pb-5">
          <div className="item border p-1 mx-1 item-1  d-flex align-items-center justify-content-center">
            <img src={img1} alt="" />
            <span className="px-1">All</span>
          </div>
          <div className="item border p-2 mx-1  d-flex align-items-center justify-content-center">
            <img src={img2} alt="" />
            <span className="px-1">Best Sellers</span>
          </div>
          <div className="item border p-2 mx-1  d-flex align-items-center justify-content-center">
            <img src={img3} alt="" />
            <span className="px-1">New</span>
          </div>
          <div className="item border p-2 mx-1 d-flex align-items-center justify-content-center">
            <img src={img4} alt="" />
            <span className="px-1">Up Coming</span>
          </div>
        </div>
        
      </div>
    </div>
      <div className="container">
        <div id="page-content" className="page-content h1">
        <div className="row g-3">
          <div className="col-md-3">
            <img src={img5} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-4">
            <img src={img6} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-5">
            <img src={img7} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-5">
            <img src={img8} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-4">
            <img src={img9} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-3">
            <img src={img10} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-3">
            <img src={img5} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-4">
            <img src={img6} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-5">
            <img src={img7} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-5">
            <img src={img8} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-4">
            <img src={img9} className="w-100" height="270" alt="" />
          </div>
          <div className="col-md-3">
            <img src={img10} className="w-100" height="270" alt="" />
          </div>
        </div>
        </div>
        <nav aria-label="Page navigation example" className='mt-5 pagein-gallry'>
          <ul id="pagination-demo" className="pagination justify-content-center pagein-gallry"></ul>
        </nav>
      </div>
  
  </>
}
