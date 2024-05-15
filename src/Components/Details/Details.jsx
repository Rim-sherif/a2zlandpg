import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import img1 from "../../assets/Rectangle 12.png";
import img2 from "../../assets/Rectangle 13.png";
import img3 from "../../assets/Rectangle 14.png";
import img4 from "../../assets/Rectangle 15.png";
import img5 from "../../assets/Rectangle 11.png";
import img6 from "../../assets/Layer_1.png";
import img7 from "../../assets/Free delivery.png";
import img8 from "../../assets/handshake transaction.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

// // import { useParams } from 'react-router-dom';

//   // let params = useParams()
//   // function getproductDetails(id){
//   //   return axios.get(`/${id}`)
//   // }

export default function Details() {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Navbar />
      <div className="product-details py-5">
        <div className="container">
          <div className="details">
            <p>
              {" "}
              <span className="dts-span">Home /List of Products/</span>Modern
              Soft Chair{" "}
            </p>
          </div>
          <div className="d-flex all-s ">
            <div className="dts-s d-flex justify-content-center align-items-center ">
              <i className="fa-regular fa-bookmark pt-2"></i>{" "}
              <span className="px-1">Save</span>
            </div>
            <div className="px-3 dts-s d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-share-nodes pt-2"></i>{" "}
              <span className="px-1">Share</span>
            </div>
          </div>

          <div className="py-5">
            <div className="row">
              <div className="col-md-2 py-2">
                <img src={img1} className="" width="170" height="100" alt="" />
                <img
                  src={img2}
                  className="py-1"
                  width="170"
                  height="100"
                  alt=""
                />
                <img src={img3} className="" width="170" height="100" alt="" />
                <img
                  src={img4}
                  className="py-1"
                  width="170"
                  height="100"
                  alt=""
                />
              </div>
              <div className="col-md-6 dts-img">
                <img src={img5} className="" height="400" alt="" />
              </div>
              <div className="col-md-4 ">
                <div className="details-item">
                  <div className="details-desription ">
                    <h5>Modern Soft Chair</h5>
                    <p>
                      The Modern Soft Chair boasts a harmonious blend of modern
                      design and plush comfort. With its sleek lines,
                    </p>
                    <h6>
                      $30.99
                      <span className="px-1">$30.99</span>
                    </h6>
                  </div>
                  <div className="d-flex reviews">
                    <div>
                      <i className="fa-solid fa-solid-star fa-star"></i>
                      <i className="fa-solid fa-solid-star fa-star"></i>
                      <i className="fa-solid fa-solid-star fa-star"></i>
                      <i className="fa-solid fa-solid-star fa-star"></i>
                      <span>
                        {" "}
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                    <div className="details-desription">
                      <p className="px-2 ">(150 Reviews)</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3 ">
                    <div className="solded ">
                      <p className="">sold 100</p>
                    </div>

                    <div className="solded stok mx-2 ">
                      <p className="">In Stock</p>
                    </div>
                  </div>
                  <div className=" d-flex  ">
                    <div className="colr1 mx-1"></div>
                    <div className="colr2 "></div>
                    <div className="colr3 mx-1"></div>
                    <div className="colr4 "></div>
                  </div>
                </div>

                <div className="row py-4 ">
                  <div className="col-md-4 ">
                    <div className="shadow py-4 text-center details-service ">
                      <img src={img6} className="" alt="" />
                      <h6 className="py-2">Free Dlivery</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="shadow py-4 text-center details-service">
                      <img src={img7} className="" alt="" />
                      <h6 className="py-2">Free Dlivery</h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="shadow py-4 text-center details-service">
                      <img src={img8} className="" alt="" />
                      <h6 className="py-2">Free Dlivery</h6>
                    </div>
                  </div>
                </div>

                <div className="count ">
                  <button className=" border ">-</button>
                  <span className="px-2">1</span>{" "}
                  <button className="border "> +</button>
                </div>

                <div className="d-flex py-3 ">
                  <button className="btn1 mx-2">Add To Card</button>
                  <button className="btn2">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div id="product-tab">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 justify-content-center tab-nav"
              >
                <Tab eventKey="home" title="Description" className="text-dark">
                <div class="row">
										<div class="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
                </Tab>
                <Tab eventKey="profile" title="Details" className=" text-dark">
                <div class="row">
										<div class="col-md-12">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
									</div>
                </Tab>
                <Tab eventKey="contact" title="Reviews (3)" className=" text-dark" >
                <div class="row">
										
										<div class="col-md-3">
											<div id="rating">
												<div class="rating-avg">
													<span>4.5</span>
													<div class="rating-stars">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star-o"></i>
													</div>
												</div>
												<ul class="rating">
													<li>
														<div class="rating-stars">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
														</div>
														<div class="rating-progress">
															<div style={{width: "80%"}}></div>
														</div>
														<span class="sum">3</span>
													</li>
													<li>
														<div class="rating-stars">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o"></i>
														</div>
														<div class="rating-progress">
															<div style={{width: "60%"}}></div>
														</div>
														<span class="sum">2</span>
													</li>
													<li>
														<div class="rating-stars">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
														</div>
														<div class="rating-progress">
															<div></div>
														</div>
														<span class="sum">0</span>
													</li>
													<li>
														<div class="rating-stars">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
														</div>
														<div class="rating-progress">
															<div></div>
														</div>
														<span class="sum">0</span>
													</li>
													<li>
														<div class="rating-stars">
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
															<i class="fa fa-star-o"></i>
														</div>
														<div class="rating-progress">
															<div></div>
														</div>
														<span class="sum">0</span>
													</li>
												</ul>
											</div>
										</div>
								
										<div class="col-md-6">
											<div id="reviews">
												<ul class="reviews">
													<li>
														<div class="review-heading">
															<h5 class="name">John</h5>
															<p class="date">27 DEC 2018, 8:0 PM</p>
															<div class="review-rating">
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star-o empty"></i>
															</div>
														</div>
														<div class="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div class="review-heading">
															<h5 class="name">John</h5>
															<p class="date">27 DEC 2018, 8:0 PM</p>
															<div class="review-rating">
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star-o empty"></i>
															</div>
														</div>
														<div class="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div class="review-heading">
															<h5 class="name">John</h5>
															<p class="date">27 DEC 2018, 8:0 PM</p>
															<div class="review-rating">
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star"></i>
																<i class="fa fa-star-o empty"></i>
															</div>
														</div>
														<div class="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
												</ul>
												<ul class="reviews-pagination">
													<li class="active">1</li>
													<li><Link className="" to="#">2</Link></li>
													<li><Link to="#">3</Link></li>
													<li><Link to="#">4</Link></li>
													<li><Link to="#"><i class="fa fa-angle-right"></i></Link></li>
												</ul>
											</div>
										</div>
								
										<div class="col-md-3">
											<div id="review-form">
												<form class="review-form">
													<input class="input" type="text" placeholder="Your Name"/>
													<input class="input" type="email" placeholder="Your Email"/>
													<textarea class="input" placeholder="Your Review"></textarea>
													<div class="input-rating">
														<span>Your Rating: </span>
														<div class="stars">
															<input id="star5" name="rating" value="5" type="radio"/><label for="star5"></label>
															<input id="star4" name="rating" value="4" type="radio"/><label for="star4"></label>
															<input id="star3" name="rating" value="3" type="radio"/><label for="star3"></label>
															<input id="star2" name="rating" value="2" type="radio"/><label for="star2"></label>
															<input id="star1" name="rating" value="1" type="radio"/><label for="star1"></label>
														</div>
													</div>
													<button class="primary-btn">Submit</button>
												</form>
											</div>
										</div>
									
									</div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
