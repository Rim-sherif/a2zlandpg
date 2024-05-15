import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "bootstrap";
import img1 from "../../assets/Rectangle 11 (1).png";
import img2 from "../../assets/Rectangle 11 (2).png";
import img3 from "../../assets/Rectangle 11 (3).png";
import img4 from "../../assets/Rectangle 11 (4).png";
import img5 from "../../assets/Rectangle 11 (5).png";
import img6 from "../../assets/Rectangle 11 (6).png";
import img7 from "../../assets/Rectangle 11 (7).png";
import img8 from "../../assets/Rectangle 11 (8).png";
import img9 from "../../assets/Rectangle 11.png";

export default function Products() {
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    document.querySelectorAll(".sidebar .nav-link1").forEach((element) => {
      element.addEventListener("click", (e) => {
        let nextEl = element.nextElementSibling;
        let parentEl = element.parentElement;

        if (nextEl) {
          e.preventDefault();
          let mycollapse = new Collapse(nextEl);

          if (nextEl.classList.contains("show")) {
            mycollapse.hide();
            setOpenDropdown(null);
          } else {
            mycollapse.show();
            setOpenDropdown(nextEl);

            var opened_submenu =
              parentEl.parentElement.querySelector(".submenu.show");

            if (opened_submenu && opened_submenu !== nextEl) {
              new Collapse(opened_submenu);
            }
          }
        }
      });
    });
  }, []);

  return (
    <>
      <section id="products" className="products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-3 text-capitalize my-3">
              <div className="products-categories-title my-4">
                <h6 className="text-uppercase">shop by categories</h6>
                <div className="products-categories-underline"></div>
              </div>
              <nav className="sidebar mb-4">
                <ul className="nav flex-column" id="nav_accordion">
                  <li className="nav-item">
                    <Link
                      className="nav-link1 side-menu-text font-weight-bold text-muted"
                      to="#"
                    >
                      Link name
                    </Link>
                  </li>
                  <li className="nav-item has-submenu">
                    <Link
                      className="nav-link1 font-weight-bold text-muted"
                      to="#"
                    >
                      Submenu links
                      <FontAwesomeIcon
                        className="mx-5"
                        icon={
                          openDropdown === document.querySelector(".submenu")
                            ? faAngleUp
                            : faAngleDown
                        }
                      />
                    </Link>
                    <ul className="submenu collapse">
                      <li>
                        <Link
                          className="nav-link1 font-weight-bold text-muted"
                          to="#"
                        >
                          Submenu item 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link1 font-weight-bold text-muted"
                          to="#"
                        >
                          Submenu item 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link1 font-weight-bold text-muted"
                          to="#"
                        >
                          Submenu item 3
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-submenu">
                    <Link
                      className="nav-link1 font-weight-bold text-muted"
                      to="#"
                    >
                      Colors Family
                      <FontAwesomeIcon
                        className="mx-5"
                        icon={
                          openDropdown ===
                          document.querySelectorAll(".submenu")[1]
                            ? faAngleUp
                            : faAngleDown
                        }
                      />
                    </Link>
                    <ul className="submenu collapse">
                      <li>
                        <Link
                          className="nav-link1 font-weight-bold text-muted"
                          to="#"
                        >
                          Daks
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link1 font-weight-bold text-muted"
                          to="#"
                        >
                          Lights
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-submenu">
                    <Link
                      className="nav-link1 font-weight-bold text-muted"
                      to="#"
                    >
                      Price
                      <FontAwesomeIcon
                        className="mx-5"
                        icon={
                          openDropdown ===
                          document.querySelectorAll(".submenu")[1]
                            ? faAngleUp
                            : faAngleDown
                        }
                      />
                    </Link>
                    <ul className="submenu collapse">
                      <li>
                        <input
                          type="range"
                          class="custom-range"
                          min="0"
                          max="100"
                          name=""
                        />
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            {" "}
                            <label>Min</label>{" "}
                            <input
                              class="form-control"
                              placeholder="$0"
                              type="number"
                            />{" "}
                          </div>
                          <div class="form-group text-right col-md-6">
                            {" "}
                            <label>Max</label>{" "}
                            <input
                              class="form-control"
                              placeholder="$1,0000"
                              type="number"
                            />{" "}
                          </div>
                        </div>{" "}
                        <Link
                          to="#"
                          class="highlight-button btn btn-medium button xs-margin-bottom-five"
                          data-abc="true"
                        >
                          Apply Now
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-submenu">
                    <Link
                      className="nav-link1 font-weight-bold text-muted"
                      to="#"
                    >
                      Seller Location
                      <FontAwesomeIcon
                        className="mx-5"
                        icon={
                          openDropdown ===
                          document.querySelectorAll(".submenu")[1]
                            ? faAngleUp
                            : faAngleDown
                        }
                      />
                    </Link>
                    <ul class="submenu collapse">
                      <li class="nav-item has-submenu">
                        <input type="checkbox" id="us" />
                        <label for="us">Cairo</label>
                      </li>
                      <li class="nav-item has-submenu">
                        <input type="checkbox" id="uk" />
                        <label for="uk">Alexandria</label>
                      </li>
                      <li class="nav-item has-submenu">
                        <input type="checkbox" id="eu" />
                        <label for="eu">Giza</label>
                      </li>
                      <li class="nav-item has-submenu">
                        <input type="checkbox" id="asia" />
                        <label for="asia">Garbia</label>
                      </li>
                      <li class="nav-item has-submenu">
                        <input type="checkbox" id="anz" />
                        <label for="anz">Domiat</label>
                      </li>
                      <li class="nav-item has-submenu">
                        <input type="checkbox" id="can" />
                        <label for="can">New Cairo</label>
                      </li>
                      <li class="nav-item has-submenu">
                        <input type="checkbox" id="oth" />
                        <label for="oth">Banha</label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            {/* product img */}
            <div className="col-md-7 col-lg-9 my-3">
              <div className="row">
                <div class="col-10 mx-auto col-md-6 col-lg-4">
                  <div class="featured-container p-3">
                    <Link to="/details">
                      <img src={img1} alt="" class="img-fluid" />
                    </Link>
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
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-10 mx-auto col-md-6 col-lg-4">
                  <div class="featured-container p-3">
                    <img src={img2} alt="" class="img-fluid" />
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
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-10 mx-auto col-md-6 col-lg-4">
                  <div class="featured-container p-3">
                    <img src={img3} alt="" class="img-fluid" />
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
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-10 mx-auto col-md-6 col-lg-4">
                  <div class="featured-container p-3">
                    <img src={img4} alt="" class="img-fluid" />
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
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-10 mx-auto col-md-6 col-lg-4">
                  <div class="featured-container p-3">
                    <img src={img5} alt="" class="img-fluid" />
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
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-10 mx-auto col-md-6 col-lg-4">
                  <div class="featured-container p-3">
                    <img src={img6} alt="" class="img-fluid" />
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
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-10 mx-auto col-md-6 col-lg-4">
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
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-10 mx-auto col-md-6 col-lg-4">
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
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-10 mx-auto col-md-6 col-lg-4">
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
                          Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
