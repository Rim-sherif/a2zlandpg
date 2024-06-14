import React from "react";
import img from "../../assets/Frame 9.png";
import img1 from "../../assets/Frame 10.png";
import img2 from "../../assets/Frame 11.png";
import img3 from "../../assets/scope-chair-01-pro-b-arcit18-removebg-preview.png";
import img4 from "../../assets/img-grid-1.jpg";
import img5 from "../../assets/img-grid-2.jpg";
import img6 from "../../assets//img-grid-3.jpg";
import img9 from "../../assets/Rectangle 11.png";
import img10 from "../../assets/Rectangle 11 (6).png";
import img7 from "../../assets/Rectangle 11 (7).png";
import img8 from "../../assets/Rectangle 11 (8).png";
import { Link } from "react-router-dom";
import NavTabs from "../navTabs/navTabs";

export default function AboutUs() {
  return ( <>
        <div className="hero w-100 col-12">
          <div className="container ">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>
                    Modern Interior <span clsas="d-block">Design Studio</span>
                  </h1>
                  <p className="mb-4">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                  <p>
                    <Link to="/shop" className="btn btn-secondary me-2 a">
                      Shop Now
                    </Link>
                    <Link href="/exploring" className="btn btn-white-outline">
                      Explore
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  <img src={img3} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="hero2">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-6">
							<div className="intro-excerpt">
								<h1>Discover the Latest <span clsas="d-block">Furniture Trends</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><Link to="" className="btn btn-secondary me-2 a">Shop Now</Link></p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className='col-lg-6'>
                            <div className='col-lg-3'>
							<div className="hero-img-wrap">
								<img src={img3} className="img-fluid" alt=""/>
							</div>
							</div>
							<div className='col-lg-3'>
							<div className="hero-img-wrap">
								<img src={img3} className="img-fluid" alt=""/>
							</div>
							</div>
							</div>
							<div className='col-lg-6'>
							<div className="hero-img-wrap">
								<img src={img3} className="img-fluid" alt=""/>
							</div>
							</div>
							
						</div>
					</div>
				</div>
			</div> */}

        <div className="we-help-section col-12">
          <div className="container w-75 py-2">
            <div className="row justify-content-between">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <div className="imgs-grid">
                  <div className="grid grid-1">
                    <img src={img4} alt="Untree.co" />
                  </div>
                  <div className="grid grid-2">
                    <img src={img5} alt="Untree.co" />
                  </div>
                  <div className="grid grid-3">
                    <img src={img6} alt="Untree.co" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 ps-lg-5">
                <h2 className="section-title mb-4">
                  We Help You Make Modern Interior Design
                </h2>
                <p>
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada
                </p>

                <ul className="list-unstyled custom-list my-4">
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ul>
                <p>
                <Link to="#" className="btn btn-dark mt-5">
                  Explore
                </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container w-75 py-2 col-12">
          <div className="row justify-content-between">
            <div className="col-lg-6 ps-lg-5">
              <h2 className="section-title mb-5">
                Discover The Last Furniture Trend
              </h2>
              <p className="my-5">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>
              <p>
                <Link to="#" className="btn btn-dark mt-5">
                  Explore More<i className="fa-solid fa-arrow-right mx-2"></i>
                </Link>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <img className="img-fluid mb-3" src={img} alt="" />
                </div>
                <div className="col-lg-6">
                  <img className="img-fluid mb-3" src={img1} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <img className="img-fluid" src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-75 py-2 mt-5 col-12">
          <h1>Stylish Collection Of Furnuture</h1>
          <p className="text-muted my-5">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
            tristique senectus et netus et malesuada
          </p>
          <NavTabs />
          <div className="container">
            <div className="row col-md-12">
              <div className="col-md-3">
                <div class="featured-container p-3">
                  <img src={img9} alt="" class="img-fluid" />
                </div>
                <h6 class="text-muted col-10 mx-auto mb-2">
                  Old Moderm Soft Chair
                </h6>
                <div class="d-flex flex-row col-10 mx-auto justify-content-start mb-1 fa">
                  <i class=" circle-one rounded-circle "></i>
                  <i class=" circle-two"></i>
                  <i class=" circle-three"></i>
                  <i class=" circle-four"></i>
                </div>
                <div class="card-body col-10 mx-auto mb-4 mt-2">
                  <div class="row ">
                    <div class="col-6">
                      <span class=" featured-store-p font-weight-bold text-dark fw-bold">
                        $200
                      </span>
                    </div>
                    <div class="col-6">
                      <Link to="#" class="featured-store-link  fw-bold">
                        Add To
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="featured-container p-3">
                  <img src={img7} alt="" class="img-fluid" />
                </div>
                <h6 class="text-muted col-10 mx-auto mb-2">
                  Old Moderm Soft Chair
                </h6>
                <div class="d-flex flex-row col-10 mx-auto justify-content-start mb-1 fa">
                  <i class=" circle-one rounded-circle "></i>
                  <i class=" circle-two"></i>
                  <i class=" circle-three"></i>
                  <i class=" circle-four"></i>
                </div>
                <div class="card-body col-10 mx-auto mb-4 mt-2">
                  <div class="row ">
                    <div class="col-6">
                      <span class=" featured-store-p font-weight-bold text-dark fw-bold">
                        $200
                      </span>
                    </div>
                    <div class="col-6">
                      <Link to="#" class="featured-store-link  fw-bold">
                        Add To
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="featured-container p-3">
                  <img src={img8} alt="" class="img-fluid" />
                </div>
                <h6 class="text-muted col-10 mx-auto mb-2">
                  Old Moderm Soft Chair
                </h6>
                <div class="d-flex flex-row col-10 mx-auto justify-content-start mb-1 fa">
                  <i class=" circle-one rounded-circle "></i>
                  <i class=" circle-two"></i>
                  <i class=" circle-three"></i>
                  <i class=" circle-four"></i>
                </div>
                <div class="card-body col-10 mx-auto mb-4 mt-2">
                  <div class="row ">
                    <div class="col-6">
                      <span class=" featured-store-p font-weight-bold text-dark fw-bold">
                        $200
                      </span>
                    </div>
                    <div class="col-6">
                      <Link to="#" class="featured-store-link  fw-bold">
                        Add To
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="featured-container p-3">
                  <img src={img10} alt="" class="img-fluid" />
                </div>
                <h6 class="text-muted col-10 mx-auto mb-2">
                  Old Moderm Soft Chair
                </h6>
                <div class="d-flex flex-row col-10 mx-auto justify-content-start mb-1 fa">
                  <i class=" circle-one rounded-circle "></i>
                  <i class=" circle-two"></i>
                  <i class=" circle-three"></i>
                  <i class=" circle-four"></i>
                </div>
                <div class="card-body col-10 mx-auto mb-4 mt-2">
                  <div class="row ">
                    <div class="col-6">
                      <span class=" featured-store-p font-weight-bold text-dark fw-bold">
                        $200
                      </span>
                    </div>
                    <div class="col-6">
                      <Link to="#" class="featured-store-link  fw-bold">
                        Add To
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-12">
              <div className="col-md-3">
                <div class="featured-container p-3">
                  <img src={img9} alt="" class="img-fluid" />
                </div>
                <h6 class="text-muted col-10 mx-auto mb-2">
                  Old Moderm Soft Chair
                </h6>
                <div class="d-flex flex-row col-10 mx-auto justify-content-start mb-1 fa">
                  <i class=" circle-one rounded-circle "></i>
                  <i class=" circle-two"></i>
                  <i class=" circle-three"></i>
                  <i class=" circle-four"></i>
                </div>
                <div class="card-body col-10 mx-auto mb-4 mt-2">
                  <div class="row ">
                    <div class="col-6">
                      <span class=" featured-store-p font-weight-bold text-dark fw-bold">
                        $200
                      </span>
                    </div>
                    <div class="col-6">
                      <Link to="#" class="featured-store-link  fw-bold">
                        Add To
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="featured-container p-3">
                  <img src={img7} alt="" class="img-fluid" />
                </div>
                <h6 class="text-muted col-10 mx-auto mb-2">
                  Old Moderm Soft Chair
                </h6>
                <div class="d-flex flex-row col-10 mx-auto justify-content-start mb-1 fa">
                  <i class=" circle-one rounded-circle "></i>
                  <i class=" circle-two"></i>
                  <i class=" circle-three"></i>
                  <i class=" circle-four"></i>
                </div>
                <div class="card-body col-10 mx-auto mb-4 mt-2">
                  <div class="row ">
                    <div class="col-6">
                      <span class=" featured-store-p font-weight-bold text-dark fw-bold">
                        $200
                      </span>
                    </div>
                    <div class="col-6">
                      <Link to="#" class="featured-store-link  fw-bold">
                        Add To
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="featured-container p-3">
                  <img src={img8} alt="" class="img-fluid" />
                </div>
                <h6 class="text-muted col-10 mx-auto mb-2">
                  Old Moderm Soft Chair
                </h6>
                <div class="d-flex flex-row col-10 mx-auto justify-content-start mb-1 fa">
                  <i class=" circle-one rounded-circle "></i>
                  <i class=" circle-two"></i>
                  <i class=" circle-three"></i>
                  <i class=" circle-four"></i>
                </div>
                <div class="card-body col-10 mx-auto mb-4 mt-2">
                  <div class="row ">
                    <div class="col-6">
                      <span class=" featured-store-p font-weight-bold text-dark fw-bold">
                        $200
                      </span>
                    </div>
                    <div class="col-6">
                      <Link to="#" class="featured-store-link  fw-bold">
                        Add To
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="featured-container p-3">
                  <img src={img10} alt="" class="img-fluid" />
                </div>
                <h6 class="text-muted col-10 mx-auto mb-2">
                  Old Moderm Soft Chair
                </h6>
                <div class="d-flex flex-row col-10 mx-auto justify-content-start mb-1 fa">
                  <i class=" circle-one rounded-circle "></i>
                  <i class=" circle-two"></i>
                  <i class=" circle-three"></i>
                  <i class=" circle-four"></i>
                </div>
                <div class="card-body col-10 mx-auto mb-4 mt-2">
                  <div class="row ">
                    <div class="col-6">
                      <span class=" featured-store-p font-weight-bold text-dark fw-bold">
                        $200
                      </span>
                    </div>
                    <div class="col-6">
                      <Link to="#" class="featured-store-link  fw-bold">
                        Add To
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      
   
  );
}
