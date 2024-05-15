import React from "react";

import Navbar from "../Navbar/Navbar";
import img1 from "../../assets/Layer.png";
import img2 from "../../assets/Layer_1 (1).png";
import img3 from "../../assets/Layer_1 (2).png";
import img4 from "../../assets/Layer_1 (3).png";
import img5 from "../../assets/Layer_1 (7).png";
import img6 from "../../assets/Layer_1 (4).png";
import img7 from "../../assets/Layer_1 (5).png";
import img8 from "../../assets/Layer_1 (6).png";

import i1 from "../../assets/s1.jpg";
import i2 from "../../assets/s2.jpg";
import i3 from "../../assets/s3.jpg";
import i4 from "../../assets/s4.png";
import i5 from "../../assets/s5.jpg";
import i6 from "../../assets/s6.jpg";
import i7 from "../../assets/s7.jpg";
import i8 from "../../assets/s8.jpg";
import i9 from "../../assets/s9.jpg";

export default function Services() {
  return (
    <>
      <Navbar />

      <section className="py-3 py-xl-8 ">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h3 className="mb-4 display-5 text-center fw-bold">
                Our Services
              </h3>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container overflow-hidden ">
          <div className="row gy-2 gx-md-4 gy-lg-0 gx-xxl-5 justify-content-center">
            <div className="services col-11 col-sm-6 col-lg-2">
              <div className="badge  p-3 mb-4">
                <img src={img1} alt=""></img>
              </div>
              <h5 className="mb-3">Furniture assembly</h5>
              <p className=" text-secondary">
                Attain's Bots work alongside your team members to
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
              </a>
            </div>
            <div className="services col-11 col-sm-6 col-lg-2">
              <div className="badge  p-3 mb-4">
                <img src={img2} alt=""></img>
              </div>
              <h5 className="mb-3">Gutter cleaningn</h5>
              <p className="text-secondary">
                Attain's Bots work alongside your team members to
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
              </a>
            </div>
            <div className="services col-11 col-sm-6 col-lg-2">
              <div className="badge p-3 mb-4">
                <img src={img3} alt=""></img>
              </div>
              <h5 className="mb-3">Home repairs</h5>
              <p className="mb-3 text-secondary">
                Attain's Bots work alongside your team members to
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
              </a>
            </div>
            <div className="services col-11 col-sm-6 col-lg-2">
              <div className="badge p-3  mb-4">
                <img src={img4} alt=""></img>
              </div>
              <h5 className="mb-3">Painting</h5>
              <p className=" mb-3 text-secondary">
                Attain's Bots work alongside your team members to
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="row gy-2 gx-md-4 gy-lg-0 gx-xxl-5 justify-content-center">
            <div className="services col-11 col-sm-6 col-lg-2">
              <div className="badge  p-3 mb-4">
                <img src={img5} alt=""></img>
              </div>
              <h5 className="mb-3">Plumbing</h5>
              <p className=" text-secondary">
                Attain's Bots work alongside your team members to
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
              </a>
            </div>
            <div className="services col-11 col-sm-6 col-lg-2">
              <div className="badge  p-3 mb-4">
                <img src={img6} alt=""></img>
              </div>
              <h5 className="mb-3">House siding</h5>
              <p className=" text-secondary">
                Attain's Bots work alongside your team members to
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
              </a>
            </div>
            <div className="services col-11 col-sm-6 col-lg-2">
              <div className="badge  p-3 mb-4">
                <img src={img7} alt=""></img>
              </div>
              <h5 className="mb-3">Carpentry</h5>
              <p className=" text-secondary">
                Attain's Bots work alongside your team members to
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
              </a>
            </div>
            <div className="services col-11 col-sm-6 col-lg-2">
              <div className="badge p-3 mb-4">
                <img src={img8} alt=""></img>
              </div>
              <h5 className="mb-3">Electrical</h5>
              <p className=" text-secondary">
                Attain's Bots work alongside your team members to
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="card-deck py-3 py-xl-8">
        <div className="container overflow-hidden">
        <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h6 className="mb-4 display-5 text-center fw-bold">
                You Can Make Your Services From Our Team
              </h6>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={i1} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Ahmed Mohamed</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex mt-2 ">
                      <button type="button" className="btn btn-primary btn-sm">
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn  btn-secondary btn-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={i2} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Amira Mohamed</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex mt-2 ">
                      <button type="button" className="btn btn-primary btn-sm">
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn  btn-secondary btn-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={i3} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Amr Mohamed</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex mt-2 ">
                      <button type="button" className="btn btn-primary btn-sm">
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn  btn-secondary btn-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={i4} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Ahmed Mohamed</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex mt-2 ">
                      <button type="button" className="btn btn-primary btn-sm">
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn  btn-secondary btn-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={i5} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Amira Mohamed</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex mt-2 ">
                      <button type="button" className="btn btn-primary btn-sm">
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn  btn-secondary btn-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={i6} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Amr Mohamed</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex mt-2 ">
                      <button type="button" className="btn btn-primary btn-sm">
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn  btn-secondary btn-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={i7} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Ahmed Mohamed</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex mt-2 ">
                      <button type="button" className="btn btn-primary btn-sm">
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn  btn-secondary btn-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={i8} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Amira Mohamed</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex mt-2 ">
                      <button type="button" className="btn btn-primary btn-sm">
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn  btn-secondary btn-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={i9} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Amr Mohamed</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                    </div>
                    <div className="col-md-12 d-flex mt-2 ">
                      <button type="button" className="btn btn-primary btn-sm">
                        View Profile
                      </button>
                      <button
                        type="button"
                        className="btn  btn-secondary btn-sm"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
